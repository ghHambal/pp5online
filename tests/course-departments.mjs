import assert from 'node:assert/strict'
import { courseDepartments, findCourseDepartment, religionHeadNames } from '../js/course-departments.js'
const departments = [
  { category: 'สามัญ', dept_code: 'SOC', dept_name: 'สังคมศึกษา', head_name: 'หัวหน้าสามัญ' },
  ...Array.from({ length: 3 }, (_, id) => ({ id, category: 'ศาสนา', dept_code: 'SOC', dept_name: 'อิญติมาอียะห์' })),
  ...Array.from({ length: 4 }, (_, id) => ({ id: id + 3, category: 'ศาสนา', dept_code: 'ARB', dept_name: 'ภาษาอาหรับ' })),
]
for (const group of ['AGM', 'AGMVOC']) {
  assert.equal(courseDepartments(departments, group).length, 2)
  assert.equal(findCourseDepartment(departments, group, 'SOC').dept_name, 'อิญติมาอียะห์')
}
assert.equal(findCourseDepartment(departments, 'ACDM', 'SOC').dept_name, 'สังคมศึกษา')
assert.equal(findCourseDepartment(departments.filter(d => d.category !== 'ศาสนา'), 'AGM', 'SOC'), null)
assert.deepEqual(courseDepartments(departments, ''), [])
const teachers = [
  { id: 1, full_name: 'หัวหน้าศาสนา', category: 'ศาสนา', positions: ['religion_subgroup_head'] },
  { id: 2, full_name: 'ครูศาสนาคนอื่น', teacher_code: '2002', category: 'ศาสนา' },
  { id: 3, full_name: 'ครูสามัญ', category: 'สามัญ', positions: ['religion_subgroup_head'] },
  { id: 4, full_name: 'หัวหน้าจากกลุ่ม', category: 'ศาสนา' },
]
const groups = [{ leader_id: 4, teachers: { full_name: 'หัวหน้าจากกลุ่ม' } }]
assert.deepEqual(religionHeadNames(teachers, groups), ['หัวหน้าศาสนา', 'หัวหน้าจากกลุ่ม'])
assert.deepEqual(religionHeadNames(teachers, groups, 'คนอื่น'), ['ครูศาสนาคนอื่น'])
assert.deepEqual(religionHeadNames(teachers, groups, '2002'), ['ครูศาสนาคนอื่น'])
assert.deepEqual(religionHeadNames(teachers, groups, 'สามัญ'), [])
console.log('Course category isolation, duplicate options, and Penyelia search passed')
