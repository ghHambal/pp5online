import assert from 'node:assert/strict'
import { createStudentSyncHandler, callGas, validateGasUrl, parseGasResponse } from '../supabase/functions/student-sync/handler.js'
const gasUrl = 'https://script.google.com/macros/s/example/exec'
const body = { operation: 'preview', sourceSheetId: 'a'.repeat(25), tabName: 'studentsData', headerRow: 1 }
const req = (data = body, token = 'valid') => new Request('https://test/functions/v1/student-sync', {
  method: 'POST', headers: { 'content-type': 'application/json', ...(token ? { authorization: 'Bearer '+token } : {}) }, body: JSON.stringify(data),
})
function setup({role = 'admin', validUser = true, answer, url = gasUrl} = {}) {
  const network = []
  const createClient = (_, key) => key === 'anon' ? {
    auth: { getUser: async () => ({data:{user:validUser ? {id:'user'} : null},error:null}) },
  } : { from: table => ({select: () => ({eq: () => ({maybeSingle: async () => ({
    data: table === 'profiles' ? {role,is_also_admin:false} : {value:url}, error:null,
  })})})}) }
  const fetchImpl = async (url, options) => {
    network.push({url,options})
    const capability = new URL(url).searchParams.get('action') === 'student_sync_capabilities'
    const result = capability ? {ok:true,studentSyncVersion:2} : (answer || {ok:true,fingerprint:'a'.repeat(43)})
    return new Response('pp5ServerReply('+JSON.stringify(result)+');')
  }
  return {handle:createStudentSyncHandler({createClient,env:{url:'db',anonKey:'anon',serviceKey:'service'},fetchImpl}),network}
}
let test = setup()
assert.equal((await test.handle(req(body, ''))).status, 401)
assert.equal(test.network.length, 0)
test = setup({validUser:false})
assert.equal((await test.handle(req())).status, 401)
test = setup({role:'teacher'})
assert.equal((await test.handle(req())).status, 403)
assert.equal(test.network.length, 0, 'non-admin must never reach GAS')
test = setup()
assert.equal((await (await test.handle(req())).json()).ok, true)
assert.equal(test.network.length, 2)
assert.equal(new URL(test.network[1].url).searchParams.get('action'), 'preview_students_sync')
assert.equal(test.network[1].options.redirect, 'manual')
assert.equal(test.network[1].options.headers, undefined, 'no user credentials may be forwarded to Google')
await test.handle(req({...body,operation:'sync'}))
assert.equal(test.network.length, 2, 'sync without reviewed fingerprint must not reach GAS')
test = setup({answer:{ok:false,error:'ไม่พบแท็บข้อมูลนักเรียน: studentsData'}})
let result = await (await test.handle(req())).json()
assert.equal(result.stage, 'preview')
assert.equal(result.mayHaveWritten, false)
assert.match(result.error, /ไม่พบแท็บ/)
test = setup({answer:{ok:false,error:'batch failed'}})
result = await (await test.handle(req({...body,operation:'sync',expectedFingerprint:'a'.repeat(43)}))).json()
assert.equal(result.mayHaveWritten, true)
test = setup({url:'https://example.com/exec'})
assert.equal((await (await test.handle(req())).json()).ok,false)
assert.equal(test.network.length,0)
assert.throws(() => validateGasUrl('https://script.google.com.evil.test/macros/s/example/exec'))
assert.throws(() => parseGasResponse('<html>Sign in</html>'))
assert.throws(() => parseGasResponse('evil({"ok":true});'))
assert.deepEqual(parseGasResponse('pp5ServerReply({"ok":true});'),{ok:true})
let redirectFetches = 0
await assert.rejects(() => callGas(gasUrl, {action:'student_sync_capabilities'}, async () => {
  redirectFetches++; return new Response(null,{status:302,headers:{location:'http://127.0.0.1/private'}})
}), /Central GAS URL/)
assert.equal(redirectFetches,1,'reject untrusted redirects before following')
console.log('Student sync proxy passed: auth, admin scope, validation, no credential forwarding, preview/sync gates, response parsing, redirect restrictions')
