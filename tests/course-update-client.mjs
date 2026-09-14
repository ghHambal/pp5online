import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'

const source = fs.readFileSync(new URL('../js/api.js', import.meta.url), 'utf8')
const start = source.indexOf('export async function updateSubjectAtomic(')
const end = source.indexOf('\nexport async function ', start + 1)
const calls = []
let error = null
const context = vm.createContext({ supabase: {
  async rpc(name, args) { calls.push({ name, args }); return { error } },
  from() { throw new Error('Save must not issue separate table writes') },
} })
vm.runInContext(source.slice(start, end).replace('export ', ''), context)
await context.updateSubjectAtomic(10, { subject_name: 'updated' }, [2])
assert.equal(calls.length, 1)
assert.equal(calls[0].name, 'update_subject_atomic')
assert.deepEqual(JSON.parse(JSON.stringify(calls[0].args)), {
  p_subject_id: 10, p_payload: { subject_name: 'updated' }, p_co_teacher_ids: [2],
})
await context.updateSubjectAtomic(10, {})
assert.equal(calls[1].args.p_co_teacher_ids, null)
error = new Error('permission denied')
await assert.rejects(context.updateSubjectAtomic(10, {}, []), /permission denied/)
const teacher = fs.readFileSync(new URL('../js/teacher.js', import.meta.url), 'utf8')
assert.match(teacher, /updateSubjectAtomic as updateSubject/)
console.log('Course client: one RPC, omitted roster preserved, errors propagated, teacher route connected.')
