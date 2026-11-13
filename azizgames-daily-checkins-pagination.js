const PAGE_SIZE = 1000
const DAILY_CHECKINS_PATH = '/rest/v1/daily_checkins'
const nativeFetch = window.fetch.bind(window)

const requestUrl = input => typeof input === 'string' ? input : input?.url || String(input || '')

const requestHeaders = (input, init) => {
  const headers = new Headers(input instanceof Request ? input.headers : undefined)
  if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value))
  return headers
}

const withExactCount = headers => {
  const current = headers.get('Prefer') || ''
  if (!current.includes('count=exact')) headers.set('Prefer', current ? `${current},count=exact` : 'count=exact')
}

const parseContentRange = value => {
  const match = String(value || '').match(/^(\d+)-(\d+)\/(\d+|\*)$/)
  return match ? { start: Number(match[1]), end: Number(match[2]), total: match[3] === '*' ? null : Number(match[3]) } : null
}

window.fetch = async (input, init) => {
  const url = requestUrl(input)
  const headers = requestHeaders(input, init)
  const method = String(init?.method || (input instanceof Request ? input.method : 'GET')).toUpperCase()

  if (!url.includes(DAILY_CHECKINS_PATH) || method !== 'GET' || headers.has('Range')) {
    return nativeFetch(input, init)
  }

  withExactCount(headers)
  const requestInit = { ...(init || {}), headers }
  const firstResponse = await nativeFetch(input, requestInit)
  if (!firstResponse.ok) return firstResponse

  const firstRange = parseContentRange(firstResponse.headers.get('Content-Range'))
  if (!firstRange?.total || firstRange.total <= PAGE_SIZE) return firstResponse

  const rows = await firstResponse.json()
  let nextStart = firstRange.end + 1
  while (nextStart < firstRange.total) {
    const nextEnd = Math.min(nextStart + PAGE_SIZE - 1, firstRange.total - 1)
    const pageHeaders = new Headers(headers)
    pageHeaders.set('Range', `${nextStart}-${nextEnd}`)
    const pageResponse = await nativeFetch(url, { ...requestInit, headers: pageHeaders })
    if (!pageResponse.ok) throw new Error(`โหลดข้อมูลรายงานตัวช่วงที่ ${nextStart}-${nextEnd} ไม่สำเร็จ`)
    const pageRows = await pageResponse.json()
    rows.push(...pageRows)
    if (pageRows.length === 0) break
    nextStart += pageRows.length
  }

  const responseHeaders = new Headers(firstResponse.headers)
  responseHeaders.set('Content-Type', 'application/json')
  responseHeaders.set('Content-Range', `0-${Math.max(rows.length - 1, 0)}/${firstRange.total}`)
  responseHeaders.delete('Content-Length')
  return new Response(JSON.stringify(rows), { status: 200, headers: responseHeaders })
}
