// Runs hourly from pg_cron. Keep each batch bounded and remove files through
// Storage API so both object bytes and Storage metadata are actually deleted.
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'npm:@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
const CRON_SECRET = Deno.env.get('LEAVE_PROOF_CLEANUP_SECRET') || 'pp5-period-reminder-cron-9f3a1c'
const BUCKET = 'student-leave-proofs'

Deno.serve(async req => {
  if (req.headers.get('x-cron-secret') !== CRON_SECRET) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }

  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)
  const { data: rows, error } = await admin.from('student_leave_requests')
    .select('id, proof_path, status')
    .not('proof_path', 'is', null)
    .lte('proof_delete_after', new Date().toISOString())
    .order('proof_delete_after')
    .limit(100)
  if (error) return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  if (!rows?.length) return new Response(JSON.stringify({ deleted: 0 }), { headers: { 'Content-Type': 'application/json' } })

  const paths = rows.map(row => row.proof_path).filter(Boolean)
  const { error: removeError } = await admin.storage.from(BUCKET).remove(paths)
  if (removeError) return new Response(JSON.stringify({ error: removeError.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })

  const removedAt = new Date().toISOString()
  let updated = 0
  for (const row of rows) {
    const { error: updateError } = await admin.from('student_leave_requests')
      .update({
        proof_path: null,
        proof_deleted_at: removedAt,
        ...(row.status === 'pending' ? {
          status: 'expired',
          teacher_comment: 'คำขอหมดอายุ เนื่องจากไม่ได้รับการตรวจภายใน 7 วัน',
        } : {}),
      })
      .eq('id', row.id)
    if (updateError) {
      return new Response(JSON.stringify({ error: updateError.message, deleted: paths.length, updated }), { status: 500, headers: { 'Content-Type': 'application/json' } })
    }
    updated++
  }
  return new Response(JSON.stringify({ deleted: paths.length, updated }), { headers: { 'Content-Type': 'application/json' } })
})
