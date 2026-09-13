import vm from 'node:vm'
import { readFileSync } from 'node:fs'
export const gpaRegion = source => source.slice(source.indexOf('// ─── GPA calculation'), source.indexOf('// ─── ขอย้ายวิชา'))
export async function loadGpa(client, before = false) {
  const text = before ? readFileSync('tests/fixtures/student-gpa-before.js', 'utf8').replace(/^import .*$/m, '')
    : gpaRegion(readFileSync('js/student-api.js', 'utf8'))
  const context = vm.createContext({ supabase: client })
  const mod = new vm.SourceTextModule(text, { context })
  await mod.link(() => { throw new Error('Unexpected GPA dependency') }); await mod.evaluate()
  return mod.namespace.getStudentGPA
}
// Use the unchanged UI's actual weighted GPA function, not a newly invented oracle.
export function uiGpa(rows) {
  const source = readFileSync('js/student-views.js', 'utf8')
  const body = source.slice(source.indexOf('    const _calcGPA = rows => {'), source.indexOf('    const _gradeColor', source.indexOf('    const _calcGPA = rows => {')))
  return vm.runInNewContext(`${body}; _calcGPA(rows)`, { rows })
}
