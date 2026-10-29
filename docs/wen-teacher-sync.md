# Sync PP5 teachers to the Wen duty system

The admin-only `sync-wen-teachers` Edge Function compares `public.teachers` in PP5 with `public.teachers` in the Wen project. It matches by PP5 `teacher_code` to Wen `id`.

The admin UI shows a preview before applying changes. New Wen rows receive only `id`, `name`, and `role: 'teacher'`. Existing rows receive only a `name` update. Passwords, roles, duty assignments, reports, and settings are left alone. Duplicate or malformed PP5 codes are listed as skipped conflicts.

## Required server secret

In the PP5 Supabase project (`isupghduywzqbmnjgtip`), open **Edge Functions → Secrets** and add:

- `WEN_SUPABASE_SERVICE_ROLE_KEY`: the service role key for the Wen project (`zhjqkylesnhcotpkzoxr`).

The key stays in PP5 Edge Function secrets and must never be added to frontend code, this repository, or chat. The Wen project URL is configured in the function source and does not need a secret. Once saved, the function can read the value from its runtime environment.

## Use

From PP5's **จัดการครู / บุคลากร** page, select **อัปเดตระบบเวร**, review the proposed additions and name changes, uncheck any entries to skip, then confirm. The function checks the signed-in PP5 user's admin role on the server for both preview and apply requests.
