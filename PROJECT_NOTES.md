# pp5-online Project Notes

This file is shared context for AI coding agents such as Codex and Claude Code. Read it before making changes in this repository.

## Project Summary

`pp5-online` is an online alternative to the legacy PP5 Google Sheets workflow. The legacy model uses one copied Google Sheet per subject/class. This app lets teachers manage many courses/classes in one web UI, while still syncing selected data back to central Google Sheets for teachers or departments that keep using the legacy workflow.

The product has free quota and paid usage:

- Teachers can create a limited number of free rooms/classes.
- Additional rooms or semester packages may require payment.
- Admin reviews payments and controls quota.

## Tech Shape

- Vite + vanilla JavaScript frontend.
- Supabase for auth/data/storage.
- Google Apps Script Web App for Google Sheet sync.
- Main admin UI: `js/views.js`
- Teacher UI: `js/teacher-views.js`, `js/teacher.js`
- Supabase API helpers: `js/api.js`
- Browser sync client: `js/sync.js`
- Central GAS script: `gas/pp5-sync.gs`

## Common Commands

```bash
npm run build
npm run dev -- --host 127.0.0.1
git status --short
```

## Collaboration Rules

- Reply to the user in Thai unless they ask otherwise.
- Prefer implementing requested changes, then build and summarize.
- Keep changes scoped. Do not refactor unrelated areas.
- Never revert unrelated user or agent changes.
- Before commit/push, run `npm run build` and `git diff --check`.
- If `gas/pp5-sync.gs` changes, remind the user to redeploy the Apps Script Web App.

## Current Important Workflows

### Subject/Course Sync To Central Google Sheet

Admin page: `renderSubjects` in `js/views.js`.

The subject page has a sync settings tab where admin can configure:

- `subjectSyncSheetId`
- `subjectSyncTabName`
- `subjectSyncKeyField`
- `subjectSyncColumns`

Defaults:

- Sheet ID: `19esDfxhPg1ksnOC-KYXTMVY40p0Y08xLZ5XZVpVTyT0`
- Tab name: `169`
- Key field: `subject_code`

The `sbJect` field must keep this format:

```text
subject_name_(subject_code)_teacher_name
```

The GAS `_syncTable` function should preserve existing sheets. It reads row 1 as headers, matches columns by header name, updates existing rows by `keyField`, and appends new rows if the key does not exist. Do not clear whole tabs unless explicitly requested.

### Central GAS / Browser Sync

The browser uses `fetch(..., mode: 'no-cors')` because Apps Script Web Apps do not return browser-readable CORS headers. This means the frontend can only know that the request was submitted, not whether GAS successfully wrote every cell.

`centralGasUrl` is stored in `system_config`.

### Admin Schedules

Schedule UI is in `renderScheduleGrid` in `js/teacher-views.js`.

Admin can open teacher schedules from teacher/account/course contexts. Schedule buttons may glow green when a teacher has created a schedule.

### Homeroom Advisors

Admin homeroom advisor UI is in `renderHomeroom` in `js/views.js`.

It supports two categories:

- `สามัญ`
- `ศาสนา`

Admin can assign missing homeroom advisors by searching teacher code/name.

### Life Skill Score Sync

Admin page: `renderLifeSkillAdmin` in `js/views.js`.

Life skill sync uses these settings:

- `lifeSkillSheetIdSamai`
- `lifeSkillSheetTabSamai`
- `lifeSkillStudentRangeSamai`

The sync writes by student code using `syncCentralBatch` in `js/sync.js`.
Use a wide student-code range for central sheets, for example `J8:J3000`, because the old default `J8:J72` is only suitable for small per-class sheets.
Life skill scores are currently for `สามัญ` only; do not reintroduce the `ศาสนา` life-skill section unless the user explicitly asks.

### Reading Score Sync

Admin page: `renderReadingAdmin` in `js/views.js`.

Reading central sync should follow the same proven pattern as life skill sync:

- Load the full student roster with `getStudents()`, not only students that already have scores.
- Provide grade and room filters where room options depend on the selected grade.
- Store the central-sheet student-code lookup range in `readingScoreStudentRange`.
- Use a wide range such as `J8:J3000` for central sheets.
- Warn instead of showing success when there are zero score records to send.

## Recent Behavior To Preserve

- Student admin list fetches beyond Supabase's 1000-row range limit.
- Student filters should keep grade and room dependent.
- Teacher account stat cards act as filters.
- Subject schedule colors should be scoped by subject plus class/room, not subject name alone.
- Schedule edit popups must appear above admin overlays.
- Subject central sync must not destroy legacy Sheet formulas or unrelated columns.

## Suggested Agent Prompt

```text
Read PROJECT_NOTES.md first. Continue work on pp5-online. Keep changes scoped, run npm run build, and push to main when done.
```
