// Test access is limited to explicitly configured student/subject pairs.
export function testIntentSubjectIds(config, studentId) {
  const ids = config?.intent_test_subjects?.[String(studentId)]
  return Array.isArray(ids) ? ids.filter(Number.isSafeInteger) : []
}

export function canDeclareTestSubject(config, studentId, subjectId) {
  return testIntentSubjectIds(config, studentId).includes(Number(subjectId))
}
