import { supabase } from './supabase.js'
import { getImpersonationContext } from './impersonation.js'

// Share only pending reads, never settled data or authorization decisions.
// The JWT identifies the actual auth/role context; impersonation is an additional
// isolation key only (it does not grant access). No tokens are persisted/logged.
export function createInFlightReader(client, getContext = () => null) {
  let scope = null
  let generation = 0
  const pending = new Map()
  const invalidate = () => { generation++; pending.clear() }
  // One synchronous listener per reader, no Auth calls inside its callback.
  client.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT' || (scope && (session?.access_token ?? null) !== scope.token)) invalidate()
  })
  const readScope = async () => {
    const { data: { session }, error } = await client.auth.getSession()
    if (error) throw error
    const context = getContext()
    return { token: session?.access_token ?? null, user: session?.user?.id ?? null,
      impersonation: JSON.stringify([context?.session_id, context?.profile_id, context?.id]) }
  }
  const sameScope = (a, b) => a?.token === b?.token && a?.user === b?.user && a?.impersonation === b?.impersonation
  return async (key, load) => {
    const current = await readScope()
    if (!sameScope(scope, current)) { invalidate(); scope = current }
    const startedGeneration = generation
    const requestKey = JSON.stringify(key)
    let request = pending.get(requestKey)
    if (!request) {
      request = Promise.resolve().then(load).finally(() => {
        if (pending.get(requestKey) === request) pending.delete(requestKey)
      })
      pending.set(requestKey, request)
    }
    const result = await request
    const latest = await readScope()
    if (startedGeneration !== generation || !sameScope(current, latest)) {
      const error = new Error('เซสชันเปลี่ยนระหว่างโหลดข้อมูล กรุณาเปิดหน้าใหม่')
      error.code = 'READ_SCOPE_CHANGED'
      throw error
    }
    // Views may sort/edit their local arrays; consumers must not share objects.
    return structuredClone(result)
  }
}

export const readInFlight = createInFlightReader(supabase, getImpersonationContext)
