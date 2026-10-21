// Department codes are only unique within a curriculum category (SOC is shared).
export const isReligionCourse = group => ['AGM', 'AGMVOC'].includes(group)
export const courseDepartmentCategory = group => isReligionCourse(group) ? 'ศาสนา'
  : group === 'ACDMVOC' ? 'สามัญปวช' : group === 'ACDM' ? 'สามัญ' : null

export function courseDepartments(departments, group) {
  const category = courseDepartmentCategory(group)
  if (!category) return []
  return [...new Map(departments.filter(row => row.category === category)
    .map(row => [String(row.dept_code).trim(), row])).values()]
}

export function findCourseDepartment(departments, group, code) {
  return courseDepartments(departments, group).find(row => row.dept_code === code || row.dept_name === code) ?? null
}

export function religionHeadNames(teachers, groups, query = '') {
  const leaders = new Set(groups.map(group => String(group.leader_id)))
  const religionTeachers = teachers.filter(person => person.category === 'ศาสนา')
  const roleHolders = religionTeachers.filter(person => leaders.has(String(person.id))
    || person.position === 'religion_subgroup_head'
    || (Array.isArray(person.positions) && person.positions.includes('religion_subgroup_head')))
  const names = query.trim()
    ? religionTeachers.filter(person => `${person.full_name ?? ''} ${person.teacher_code ?? ''}`.toLowerCase().includes(query.trim().toLowerCase())).map(person => person.full_name)
    : [...roleHolders.map(person => person.full_name), ...groups.map(group => group.teachers?.full_name)]
  return [...new Set(names.map(name => String(name ?? '').trim()).filter(Boolean))]
}
