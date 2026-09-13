// Synthetic data only. Shared by VM and browser parity tests.
export function makeGpaFixture(classCount = 20, columnsPerClass = 4) {
  const db = { class_students: [], class_score_columns: [], student_scores: [] }
  let id = 1
  for (let c = 1; c <= classCount; c++) {
    db.class_students.push({ id: c, class_id: c, student_id: 1, classes: {
      id: c, source_class_id: c === 2 ? 999999 : null,
      subject_group_override: c === 5 ? 'samai' : c === 6 ? 'sasana' : null,
      master_subjects: { subject_name: `วิชา ${c}`, subject_code: `T${c}`, credit: c % 3 === 0 ? 1.5 : 1,
        subject_group: c % 2 === 0 ? 'AGM' : 'ACDM', teachers: { full_name: 'ครูทดสอบ', category: c === 5 ? 'ศาสนา' : 'สามัญ' } },
    } })
    for (let n = 0; n < columnsPerClass; n++, id++) {
      db.class_score_columns.push({ id, class_id: c, assignment_type: n % 2 ? 'final' : 'midterm', max_score: 10 })
      if (c === 3 && n === 0) continue // missing score
      const value = c === 1 ? 0 : c === 4 && n === 0 ? null : c === 2 ? 8.125 : 9
      db.student_scores.push({ student_id: 1, assignment_id: id, original_score: value,
        final_score: c === 7 ? 9.5 : value, retake_score: c === 7 ? 9.5 : null })
    }
  }
  db.class_score_columns.push({ id: id++, class_id: 1, assignment_type: 'คะแนนพิเศษ', max_score: 999 })
  db.class_score_columns.push({ id: id++, class_id: 1, assignment_type: null, max_score: 999 })
  db.class_score_columns.push({ id, class_id: 999999, assignment_type: 'final', max_score: 100 })
  db.student_scores.push({ assignment_id: id, student_id: 1, original_score: 0, final_score: 0, retake_score: null })
  db.student_scores.push({ assignment_id: 1, student_id: 999, original_score: 999, final_score: 999 })
  return db
}

export function createGpaClient(db, { cap = 1000, failTable = null, failAt = null } = {}) {
  const calls = []
  const client = {
    calls,
    auth: {
      getSession: async () => ({ data: { session: { user: { id: 'synthetic-student' }, access_token: 'synthetic-token' } }, error: null }),
      getUser: async () => ({ data: { user: { id: 'synthetic-student' } } }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }),
    },
    from(table) {
      const q = { table, filters: [], order: [], limit: Infinity }
      const chain = new Proxy({}, { get(_, method) {
        if (method === 'then') return async (resolve, reject) => {
          try {
            calls.push(q)
            if (table === failTable || calls.length === failAt) return resolve({ data: null, error: { code: '57014', message: 'synthetic timeout' } })
            let rows = [...(db[table] ?? [])]
            for (const [op, key, value, extra] of q.filters) {
              if (op === 'eq') rows = rows.filter(r => r[key] === value)
              else if (op === 'in') rows = rows.filter(r => value.includes(r[key]))
              else if (op === 'gt') rows = rows.filter(r => r[key] > value)
              else if (op === 'not' && value === 'eq') rows = rows.filter(r => r[key] != null && r[key] !== extra)
            }
            for (const [key, options] of [...q.order].reverse()) rows.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0) * (options?.ascending === false ? -1 : 1))
            rows = rows.slice(q.from ?? 0, (q.from ?? 0) + Math.min(cap, q.limit))
            // Model the selected top-level fields; embed is supplied as fixture JSON.
            if (q.columns && q.columns !== '*') {
              const fields = q.columns.split(',').map(x => x.trim())
              rows = rows.map(r => Object.fromEntries(Object.entries(r).filter(([k]) => fields.includes(k) || (k === 'classes' && q.columns.includes('classes(')))))
            }
            resolve({ data: q.single ? rows[0] ?? null : structuredClone(rows), error: null, count: null })
          } catch (error) { reject(error) }
        }
        return (...args) => {
          if (['insert', 'upsert', 'update', 'delete'].includes(method)) throw new Error('H1 must never write')
          if (method === 'select') q.columns = args[0]
          else if (method === 'order') q.order.push(args)
          else if (method === 'limit') q.limit = args[0]
          else if (method === 'range') { q.from = args[0]; q.limit = args[1] - args[0] + 1 }
          else if (method === 'single' || method === 'maybeSingle') q.single = true
          else q.filters.push([method, ...args])
          return chain
        }
      } })
      return chain
    },
    rpc(name) {
      calls.push({ table: name, rpc: true })
      return Promise.resolve({ data: name === 'get_student_enrolled_classes' ? db.class_students.map(e => e.classes) : [], error: null })
    },
  }
  return client
}
