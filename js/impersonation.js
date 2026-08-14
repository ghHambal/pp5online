const STORAGE_KEY = 'impersonated_teacher'

function readStoredContext() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const value = JSON.parse(raw)
    if (!value?.id || !value?.profile_id) return null
    return value
  } catch {
    return null
  }
}

export function getImpersonationContext() {
  return readStoredContext()
}

export function isImpersonating() {
  return Boolean(readStoredContext())
}

export async function validateImpersonation(supabase) {
  const context = readStoredContext()
  if (!context?.session_id) return null
  const { data, error } = await supabase.rpc('validate_admin_impersonation', {
    p_session_id: context.session_id,
  })
  if (error) throw error
  const session = Array.isArray(data) ? data[0] : data
  if (!session?.is_valid || session.target_profile_id !== context.profile_id || Number(session.target_teacher_id) !== Number(context.id)) {
    throw new Error('เซสชันสวมบทบาทไม่ถูกต้องหรือสิ้นสุดแล้ว')
  }
  return context
}

export async function getEffectiveProfileId(supabase) {
  const impersonation = readStoredContext()
  if (impersonation?.profile_id) return impersonation.profile_id
  const { data: { user } } = await supabase.auth.getUser()
  return user?.id ?? null
}

export async function getEffectiveUser(supabase) {
  const { data: { user } } = await supabase.auth.getUser()
  const impersonation = readStoredContext()
  if (!impersonation?.profile_id) return user
  return user ? { ...user, id: impersonation.profile_id } : { id: impersonation.profile_id }
}

export async function startImpersonation(supabase, teacher) {
  if (!teacher?.id || !teacher?.profile_id) {
    throw new Error('ครูคนนี้ยังไม่มีบัญชีผู้ใช้ จึงไม่สามารถสวมบทบาทได้')
  }

  const { data, error } = await supabase.functions.invoke('admin-impersonate', {
    body: { action: 'start', target_profile_id: teacher.profile_id },
  })
  if (error) throw error

  if (!data?.session_id || !data?.token_hash) throw new Error(data?.error || 'ไม่สามารถเริ่มโหมดสวมบทบาทได้')

  const { error: switchError } = await supabase.auth.verifyOtp({
    token_hash: data.token_hash,
    type: 'magiclink',
  })
  if (switchError) {
    await supabase.rpc('end_admin_impersonation', { p_session_id: data.session_id }).catch(() => {})
    throw switchError
  }

  const context = {
    id: teacher.id,
    full_name: teacher.full_name,
    teacher_code: teacher.teacher_code,
    profile_id: teacher.profile_id,
    image_url: teacher.image_url ?? null,
    session_id: data.session_id,
    actor_profile_id: data.actor_profile_id,
    started_at: data.started_at,
  }
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(context))
  return context
}

export async function endImpersonation(supabase) {
  const context = readStoredContext()
  if (!context?.session_id) {
    sessionStorage.removeItem(STORAGE_KEY)
    return
  }

  const { data, error } = await supabase.functions.invoke('admin-impersonate', {
    body: { action: 'finish', session_id: context.session_id },
  })
  if (error) throw error
  if (!data?.token_hash) throw new Error(data?.error || 'ไม่สามารถกลับสู่บัญชีแอดมินได้')

  const { error: switchError } = await supabase.auth.verifyOtp({
    token_hash: data.token_hash,
    type: 'magiclink',
  })
  if (switchError) throw switchError

  await supabase.rpc('end_admin_impersonation', { p_session_id: context.session_id })
  sessionStorage.removeItem(STORAGE_KEY)
}

export function clearImpersonation() {
  sessionStorage.removeItem(STORAGE_KEY)
}
