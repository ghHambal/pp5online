export function safeRegradeUrl(value) {
  try {
    const url = new URL(String(value))
    return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? url.href : null
  } catch { return null }
}

export function regradeRecordId(value) {
  const id = Number(value)
  return Number.isSafeInteger(id) && id > 0 ? id : null
}

export function regradeChanges(previous, rows, role) {
  if (!previous) return []
  return rows.filter(row => {
    const old = previous.get(row.id)
    if (role === 'teacher') return row.status === 'จำนงแล้ว' && (!old || old.status !== row.status || old.declared_at !== row.declared_at)
    const responseChanged = !old || old.status !== row.status || old.assigned_at !== row.assigned_at || old.method !== row.method || old.due_text !== row.due_text || old.file_url !== row.file_url
    return (row.status === 'กำลังดำเนินการปรับแก้' && responseChanged)
      || (row.status === 'จำนงแล้ว' && old?.status === 'กำลังดำเนินการปรับแก้')
  })
}
