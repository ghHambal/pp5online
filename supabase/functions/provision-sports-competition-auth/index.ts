import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'npm:@supabase/supabase-js@2'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
}

const response = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: corsHeaders })

const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
})

function aliasFor(row: { event_id: string; username: string }) {
  const eventPart = row.event_id.replaceAll('-', '').slice(0, 12)
  return `azgames.${row.username}.${eventPart}@pp5online.internal`
}

async function callerIsAdmin(callerId: string) {
  const { data: profile } = await admin.from('profiles')
    .select('id, role, is_also_admin').eq('id', callerId).maybeSingle()
  if (profile?.role === 'admin' || profile?.is_also_admin === true) return true

  const { data: teacher } = await admin.from('teachers')
    .select('profile_id, staff_type, position, positions')
    .eq('profile_id', callerId).maybeSingle()
  if (!teacher) return false
  const positions = Array.isArray(teacher.positions) ? teacher.positions : []
  if (teacher.staff_type === 'แอดมิน' || teacher.position === 'admin' || positions.includes('house_color_admin')) return true

  const { data: permissions } = await admin.from('role_permissions')
    .select('allowed').eq('feature', 'menu_sports_admin')
    .in('position', [...new Set([teacher.position, ...positions].filter(Boolean))])
  return (permissions || []).some(row => row.allowed === true)
}

async function provisionRow(row: any, callerId: string) {
  const email = aliasFor(row)
  let authUserId = row.auth_user_id
  let user: any = null

  if (authUserId) {
    const result = await admin.auth.admin.updateUserById(authUserId, {
      email,
      password: row.password,
      email_confirm: true,
      user_metadata: {
        full_name: row.teacher_name,
        teacher_code: row.teacher_code,
        account_type: 'azgames_competition_responsible',
      },
    })
    if (result.error) throw result.error
    user = result.data.user
  } else {
    const result = await admin.auth.admin.createUser({
      email,
      password: row.password,
      email_confirm: true,
      user_metadata: {
        full_name: row.teacher_name,
        teacher_code: row.teacher_code,
        account_type: 'azgames_competition_responsible',
      },
    })
    if (result.error) throw result.error
    user = result.data.user
    authUserId = user?.id
  }

  if (!authUserId) throw new Error('สร้างบัญชี Auth แล้วแต่ไม่พบรหัสบัญชี')

  const { error: profileError } = await admin.from('profiles').upsert({
    id: authUserId,
    role: 'teacher',
    user_code: row.username,
    is_also_admin: false,
  }, { onConflict: 'id' })
  if (profileError) throw profileError

  const { data: existingStaff, error: staffReadError } = await admin.from('azfutsal_admins')
    .select('id').eq('profile_id', authUserId).maybeSingle()
  if (staffReadError) throw staffReadError
  if (existingStaff?.id) {
    const { error } = await admin.from('azfutsal_admins')
      .update({ scopes: ['result'], granted_by: callerId, note: 'บัญชีผู้รับผิดชอบรายการแข่งขัน AZIZGAMES' })
      .eq('id', existingStaff.id)
    if (error) throw error
  } else {
    const { error } = await admin.from('azfutsal_admins').insert({
      profile_id: authUserId,
      granted_by: callerId,
      scopes: ['result'],
      note: 'บัญชีผู้รับผิดชอบรายการแข่งขัน AZIZGAMES',
    })
    if (error) throw error
  }

  const { error: credentialError } = await admin.from('sports_competition_responsible_credentials')
    .update({
      auth_user_id: authUserId,
      auth_email: email,
      provision_status: 'ready',
      provisioned_at: new Date().toISOString(),
      updated_by: callerId,
      updated_at: new Date().toISOString(),
    })
    .eq('id', row.id)
  if (credentialError) throw credentialError

  return { credential_id: row.id, username: row.username, auth_user_id: authUserId, auth_email: email }
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  const authHeader = req.headers.get('Authorization') || ''
  const jwt = authHeader.replace(/^Bearer\s+/i, '')
  if (!jwt) return response({ error: 'unauthorized' }, 401)

  const caller = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  })
  const { data: { user }, error: userError } = await caller.auth.getUser(jwt)
  if (userError || !user || !(await callerIsAdmin(user.id))) {
    return response({ error: 'admin permission required' }, 403)
  }

  const body = await req.json().catch(() => ({}))
  const eventId = String(body.event_id || '')
  if (!eventId) return response({ error: 'event_id is required' }, 400)

  let query = admin.from('sports_competition_responsible_credentials')
    .select('id, event_id, teacher_profile_id, username, password, auth_user_id')
    .eq('event_id', eventId)
  if (body.credential_id) query = query.eq('id', String(body.credential_id))
  const { data: rows, error: rowsError } = await query
  if (rowsError) return response({ error: rowsError.message }, 500)

  const results: Array<Record<string, unknown>> = []
  for (const raw of rows || []) {
    const { data: teacher } = await admin.from('teachers')
      .select('full_name, teacher_code').eq('profile_id', raw.teacher_profile_id).maybeSingle()
    try {
      results.push(await provisionRow({ ...raw, teacher_name: teacher?.full_name || 'ครูผู้รับผิดชอบ', teacher_code: teacher?.teacher_code || raw.username }, user.id))
    } catch (error) {
      await admin.from('sports_competition_responsible_credentials').update({
        provision_status: 'error',
        updated_by: user.id,
        updated_at: new Date().toISOString(),
      }).eq('id', raw.id)
      results.push({ credential_id: raw.id, username: raw.username, error: error instanceof Error ? error.message : String(error) })
    }
  }

  const failed = results.filter(row => row.error)
  return response({ ok: failed.length === 0, provisioned: results.length - failed.length, failed: failed.length, results })
})
