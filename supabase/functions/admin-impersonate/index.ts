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

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  const authHeader = req.headers.get('Authorization') || ''
  const jwt = authHeader.replace(/^Bearer\s+/i, '')
  if (!jwt) return response({ error: 'unauthorized' }, 401)

  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  const caller = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const { data: { user }, error: userError } = await caller.auth.getUser(jwt)
  if (userError || !user) return response({ error: 'unauthorized' }, 401)

  const body = await req.json().catch(() => ({}))

  if (body.action === 'start') {
    const { data: actor } = await admin.from('profiles')
      .select('id,role,is_also_admin').eq('id', user.id).maybeSingle()
    if (!actor || (actor.role !== 'admin' && actor.is_also_admin !== true)) {
      return response({ error: 'admin permission required' }, 403)
    }

    const { data: teacher } = await admin.from('teachers')
      .select('id,profile_id').eq('profile_id', body.target_profile_id).maybeSingle()
    if (!teacher?.profile_id) return response({ error: 'target teacher account not found' }, 404)

    const { data: targetAuth, error: targetError } = await admin.auth.admin.getUserById(teacher.profile_id)
    if (targetError || !targetAuth.user?.email) return response({ error: 'target teacher login not found' }, 404)

    await admin.from('admin_impersonation_sessions')
      .update({ ended_at: new Date().toISOString() })
      .eq('actor_profile_id', actor.id).is('ended_at', null)

    const { data: audit, error: auditError } = await admin.from('admin_impersonation_sessions')
      .insert({
        actor_profile_id: actor.id,
        target_profile_id: teacher.profile_id,
        target_teacher_id: teacher.id,
        user_agent: req.headers.get('user-agent'),
      })
      .select('id,actor_profile_id,started_at').single()
    if (auditError || !audit) return response({ error: auditError?.message || 'cannot create audit session' }, 500)

    const { data: link, error: linkError } = await admin.auth.admin.generateLink({
      type: 'magiclink',
      email: targetAuth.user.email,
    })
    if (linkError || !link.properties?.hashed_token) {
      await admin.from('admin_impersonation_sessions').update({ ended_at: new Date().toISOString() }).eq('id', audit.id)
      return response({ error: linkError?.message || 'cannot create teacher session' }, 500)
    }

    return response({
      session_id: audit.id,
      actor_profile_id: audit.actor_profile_id,
      started_at: audit.started_at,
      token_hash: link.properties.hashed_token,
    })
  }

  if (body.action === 'finish') {
    const { data: audit } = await admin.from('admin_impersonation_sessions')
      .select('id,actor_profile_id,target_profile_id,ended_at')
      .eq('id', body.session_id).maybeSingle()
    if (!audit || audit.ended_at || audit.target_profile_id !== user.id) {
      return response({ error: 'active impersonation session not found' }, 403)
    }

    const { data: actorAuth, error: actorError } = await admin.auth.admin.getUserById(audit.actor_profile_id)
    if (actorError || !actorAuth.user?.email) return response({ error: 'admin login not found' }, 404)

    const { data: link, error: linkError } = await admin.auth.admin.generateLink({
      type: 'magiclink',
      email: actorAuth.user.email,
    })
    if (linkError || !link.properties?.hashed_token) {
      return response({ error: linkError?.message || 'cannot restore admin session' }, 500)
    }
    return response({ token_hash: link.properties.hashed_token })
  }

  return response({ error: 'invalid action' }, 400)
})
