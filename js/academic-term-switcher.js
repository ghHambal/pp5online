// Helpers for the academic-term viewer switcher.
// This UI selects the term being viewed; it never changes system_config.

export function academicTermKey(term) {
  return `${Number(term?.academic_year ?? term?.academicYear)}:${Number(term?.semester)}`
}

export function currentAcademicTerm(cfg = {}) {
  return {
    academic_year: Number(cfg.academicYear ?? cfg.academic_year ?? 2568),
    semester: Number(cfg.semester ?? 1),
    start_date: cfg.semester_start ?? null,
    end_date: cfg.semester_end ?? null,
    is_current: true,
  }
}

export function collectAcademicTerms(terms, cfg = {}, extras = []) {
  const rows = [...(Array.isArray(terms) ? terms : []), currentAcademicTerm(cfg), ...(extras ?? [])]
  const unique = new Map()
  for (const row of rows) {
    const key = academicTermKey(row)
    if (!/^\d+:\d+$/.test(key) || unique.has(key)) continue
    unique.set(key, {
      ...row,
      academic_year: Number(row.academic_year ?? row.academicYear),
      semester: Number(row.semester),
    })
  }
  const currentKey = academicTermKey(currentAcademicTerm(cfg))
  return [...unique.values()].sort((a, b) => {
    const ak = academicTermKey(a), bk = academicTermKey(b)
    if (ak === currentKey) return -1
    if (bk === currentKey) return 1
    return bk.localeCompare(ak, undefined, { numeric: true })
  })
}

export function academicTermLabel(term) {
  return `ภาคเรียนที่ ${term.semester}/${term.academic_year}`
}

export function renderAcademicTermOptions(terms, selectedKey, currentKey) {
  return terms.map(term => {
    const key = academicTermKey(term)
    const suffix = key === currentKey ? ' (ปัจจุบัน)' : ' (ย้อนหลัง)'
    return `<option value="${key}" ${key === selectedKey ? 'selected' : ''}>${academicTermLabel(term)}${suffix}</option>`
  }).join('')
}
