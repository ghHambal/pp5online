import { supabase } from './supabase.js'

const PAGE_SIZE = 500
const BATCH_SIZE = 250
const FORMAT = 'pp5-full-backup'
const VERSION = 1
const SHA256_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
]

class Sha256 {
  constructor() {
    this.state = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19])
    this.buffer = new Uint8Array(64)
    this.bufferLength = 0
    this.bytes = 0
  }

  update(data) {
    this.bytes += data.byteLength
    let offset = 0
    if (this.bufferLength) {
      const copied = Math.min(64 - this.bufferLength, data.byteLength)
      this.buffer.set(data.subarray(0, copied), this.bufferLength)
      this.bufferLength += copied
      offset += copied
      if (this.bufferLength === 64) {
        this.process(this.buffer)
        this.bufferLength = 0
      }
    }
    while (offset + 64 <= data.byteLength) {
      this.process(data.subarray(offset, offset + 64))
      offset += 64
    }
    if (offset < data.byteLength) {
      this.buffer.set(data.subarray(offset), 0)
      this.bufferLength = data.byteLength - offset
    }
    return this
  }

  process(chunk) {
    const w = new Uint32Array(64)
    for (let i = 0; i < 16; i++) {
      const j = i * 4
      w[i] = (((chunk[j] << 24) | (chunk[j + 1] << 16) | (chunk[j + 2] << 8) | chunk[j + 3]) >>> 0)
    }
    for (let i = 16; i < 64; i++) {
      const x = w[i - 15]
      const y = w[i - 2]
      const s0 = ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3)
      const s1 = ((y >>> 17) | (y << 15)) ^ ((y >>> 19) | (y << 13)) ^ (y >>> 10)
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) >>> 0
    }
    let [a, b, c, d, e, f, g, h] = this.state
    for (let i = 0; i < 64; i++) {
      const s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7))
      const ch = (e & f) ^ (~e & g)
      const temp1 = (h + s1 + ch + SHA256_K[i] + w[i]) >>> 0
      const s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10))
      const maj = (a & b) ^ (a & c) ^ (b & c)
      const temp2 = (s0 + maj) >>> 0
      h = g
      g = f
      f = e
      e = (d + temp1) >>> 0
      d = c
      c = b
      b = a
      a = (temp1 + temp2) >>> 0
    }
    this.state[0] = (this.state[0] + a) >>> 0
    this.state[1] = (this.state[1] + b) >>> 0
    this.state[2] = (this.state[2] + c) >>> 0
    this.state[3] = (this.state[3] + d) >>> 0
    this.state[4] = (this.state[4] + e) >>> 0
    this.state[5] = (this.state[5] + f) >>> 0
    this.state[6] = (this.state[6] + g) >>> 0
    this.state[7] = (this.state[7] + h) >>> 0
  }

  hex() {
    const bitLength = this.bytes * 8
    const paddingLength = this.bufferLength < 56 ? 56 - this.bufferLength : 120 - this.bufferLength
    const padding = new Uint8Array(paddingLength + 8)
    padding[0] = 0x80
    const high = Math.floor(bitLength / 0x100000000)
    const low = bitLength >>> 0
    padding[padding.length - 8] = (high >>> 24) & 0xff
    padding[padding.length - 7] = (high >>> 16) & 0xff
    padding[padding.length - 6] = (high >>> 8) & 0xff
    padding[padding.length - 5] = high & 0xff
    padding[padding.length - 4] = (low >>> 24) & 0xff
    padding[padding.length - 3] = (low >>> 16) & 0xff
    padding[padding.length - 2] = (low >>> 8) & 0xff
    padding[padding.length - 1] = low & 0xff
    this.update(padding)
    return [...this.state].map(value => value.toString(16).padStart(8, '0')).join('')
  }
}

function safeFilePart(value) {
  return String(value ?? '').replace(/[^0-9A-Za-zก-๙._-]+/g, '-').replace(/^-+|-+$/g, '') || 'pp5'
}

async function sha256Hex(blob) {
  const hash = new Sha256()
  const reader = blob.stream().getReader()
  while (true) {
    const { value, done } = await reader.read()
    if (done) break
    if (value?.byteLength) hash.update(value)
  }
  return hash.hex()
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = fileName
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1500)
}

function topoSort(catalog) {
  const byName = new Map(catalog.map(x => [x.table_name, x]))
  const state = new Map()
  const result = []
  const visit = name => {
    if (state.get(name) === 2) return
    if (state.get(name) === 1) return
    state.set(name, 1)
    for (const parent of byName.get(name)?.depends_on ?? []) if (byName.has(parent)) visit(parent)
    state.set(name, 2)
    result.push(byName.get(name))
  }
  for (const item of catalog) visit(item.table_name)
  return result.filter(Boolean)
}

async function createGzipWriter(fileName) {
  if (typeof CompressionStream === 'undefined') {
    throw new Error('เบราว์เซอร์นี้ไม่รองรับการบีบอัดไฟล์สำรอง กรุณาใช้ Chrome, Edge หรือ Safari รุ่นปัจจุบัน')
  }
  const stream = new CompressionStream('gzip')
  const writer = stream.writable.getWriter()
  if (typeof window !== 'undefined' && typeof window.showSaveFilePicker === 'function') {
    const handle = await window.showSaveFilePicker({
      suggestedName: fileName,
      types: [{ description: 'ไฟล์สำรอง ปพ.5', accept: { 'application/gzip': ['.jsonl.gz'] } }],
    })
    const fileWriter = await handle.createWritable()
    const [fileStream, hashStream] = stream.readable.tee()
    const fileDone = fileStream.pipeTo(fileWriter)
    const hash = new Sha256()
    let byteSize = 0
    const hashDone = (async () => {
      const reader = hashStream.getReader()
      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        if (value?.byteLength) {
          hash.update(value)
          byteSize += value.byteLength
        }
      }
    })()
    return {
      async write(value) { await writer.write(new TextEncoder().encode(value)) },
      async close() {
        await writer.close()
        await Promise.all([fileDone, hashDone])
        return { blob: null, sha256: hash.hex(), byteSize, savedToDisk: true }
      },
      async abort() {
        try { await writer.abort() } catch (_) { /* best effort */ }
        try { await fileWriter.abort() } catch (_) { /* best effort */ }
      },
    }
  }
  const output = []
  const reader = stream.readable.getReader()
  const readerDone = (async () => {
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      if (value?.byteLength) output.push(value)
    }
  })()
  return {
    async write(value) { await writer.write(new TextEncoder().encode(value)) },
    async close() {
      await writer.close()
      await readerDone
      const blob = new Blob(output, { type: 'application/gzip' })
      return { blob, sha256: await sha256Hex(blob), byteSize: blob.size, savedToDisk: false }
    },
  }
}

async function readCatalog() {
  const { data, error } = await supabase.rpc('admin_full_backup_catalog')
  if (error) throw error
  const catalog = Array.isArray(data) ? data : []
  if (!catalog.length) throw new Error('ไม่พบรายการข้อมูลสำหรับสำรอง')
  return topoSort(catalog)
}

async function readTablePage(table, offset) {
  const { data, error } = await supabase.rpc('admin_full_backup_read', {
    p_table: table,
    p_offset: offset,
    p_limit: PAGE_SIZE,
  })
  if (error) throw error
  return Array.isArray(data) ? data : []
}

async function readStorageCatalog() {
  const { data, error } = await supabase.rpc('admin_full_backup_storage_catalog')
  if (error) throw error
  return data ?? { buckets: [], objects: [] }
}

async function blobToBase64(blob) {
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(reader.error ?? new Error('อ่านไฟล์ Storage ไม่สำเร็จ'))
    reader.readAsDataURL(blob)
  })
  return String(dataUrl).split(',', 2)[1] ?? ''
}

function base64ToBlob(base64, contentType = 'application/octet-stream') {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return new Blob([bytes], { type: contentType })
}

/** สำรองข้อมูลทั้งหมดของระบบแอปใน public schema เป็น JSONL gzip */
export async function createFullBackup({ onProgress } = {}) {
  const catalog = await readCatalog()
  const fileName = `pp5-full-backup-${safeFilePart(new Date().toISOString().replace(/[:.]/g, '-'))}.jsonl.gz`
  const writer = await createGzipWriter(fileName)
  const counts = {}
  await writer.write(JSON.stringify({
    format: FORMAT,
    version: VERSION,
    created_at: new Date().toISOString(),
    scope: 'all-public-application-tables',
    note: 'รวมข้อมูลแอปพลิเคชันทั้งหมดใน public schema และไฟล์ใน Supabase Storage ไม่รวม auth.users รหัสผ่าน และระบบภายใน Supabase',
    catalog: catalog.map(x => ({ table_name: x.table_name, depends_on: x.depends_on ?? [] })),
  }) + '\n')

  for (const [tableIndex, item] of catalog.entries()) {
    let offset = 0
    let tableCount = 0
    while (true) {
      const rows = await readTablePage(item.table_name, offset)
      for (const row of rows) {
        await writer.write(JSON.stringify({ kind: 'row', table: item.table_name, row }) + '\n')
        tableCount += 1
      }
      onProgress?.(`สำรอง ${item.table_name} (${tableIndex + 1}/${catalog.length})`, tableCount)
      if (rows.length < PAGE_SIZE) break
      offset += rows.length
    }
    counts[item.table_name] = tableCount
  }
  const storage = await readStorageCatalog()
  for (const [fileIndex, object] of (storage.objects ?? []).entries()) {
    const { data: blob, error } = await supabase.storage.from(object.bucket_id).download(object.name)
    if (error) throw new Error(`สำรองไฟล์ Storage ${object.bucket_id}/${object.name} ไม่สำเร็จ: ${error.message}`)
    const base64 = await blobToBase64(blob)
    await writer.write(JSON.stringify({
      kind: 'storage',
      bucket: object.bucket_id,
      name: object.name,
      content_type: blob.type || object.metadata?.mimetype || 'application/octet-stream',
      data: base64,
    }) + '\n')
    const key = `storage:${object.bucket_id}`
    counts[key] = (counts[key] ?? 0) + 1
    onProgress?.(`สำรองไฟล์ ${object.bucket_id} (${fileIndex + 1}/${storage.objects.length})`, counts[key])
  }
  await writer.write(JSON.stringify({ kind: 'end', counts }) + '\n')

  const output = await writer.close()
  const sha256 = output.sha256
  const { data, error } = await supabase.rpc('admin_record_full_backup', {
    p_file_name: fileName,
    p_byte_size: blob.size,
    p_sha256: sha256,
    p_table_counts: counts,
  })
  if (error) throw error
  if (output.blob) downloadBlob(output.blob, fileName)
  return { backupId: data?.id, fileName, byteSize: output.byteSize, sha256, counts, tableCount: catalog.length, savedToDisk: output.savedToDisk }
}

async function* lineReader(file) {
  if (!file?.name?.endsWith('.gz') && file?.type !== 'application/gzip') {
    throw new Error('กรุณาเลือกไฟล์สำรอง .jsonl.gz ที่สร้างจากระบบ ปพ.5')
  }
  const body = file.stream().pipeThrough(new DecompressionStream('gzip'))
  const reader = body.getReader()
  const decoder = new TextDecoder()
  let pending = ''
  while (true) {
    const { value, done } = await reader.read()
    if (done) break
    pending += decoder.decode(value, { stream: true })
    const lines = pending.split('\n')
    pending = lines.pop() ?? ''
    for (const line of lines) if (line.trim()) yield line
  }
  pending += decoder.decode()
  if (pending.trim()) yield pending
}

async function restoreBatch(table, rows) {
  if (!rows.length) return
  const { error } = await supabase.rpc('admin_full_backup_restore_table', { p_table: table, p_rows: rows })
  if (error) throw error
}

async function restoreStorage(item) {
  const blob = base64ToBlob(item.data, item.content_type)
  const { error } = await supabase.storage.from(item.bucket).upload(item.name, blob, {
    upsert: true,
    contentType: item.content_type || 'application/octet-stream',
  })
  if (error) throw error
}

/** กู้คืนข้อมูลทั้งหมดแบบ upsert โดยไม่ลบข้อมูลที่อยู่นอกไฟล์ */
export async function restoreFullBackup(file, { onProgress } = {}) {
  const sha256 = await sha256Hex(file)
  const { data: registeredBackup, error: lookupError } = await supabase
    .from('academic_term_backups')
    .select('id, file_name, byte_size')
    .eq('backup_scope', 'full')
    .eq('sha256', sha256)
    .eq('status', 'verified')
    .maybeSingle()
  if (lookupError) throw lookupError
  if (!registeredBackup) throw new Error('ไฟล์นี้ไม่ตรงกับไฟล์ Full Backup ที่ระบบเคยบันทึกไว้')

  let manifest = null
  let currentTable = null
  let batch = []
  const counts = {}
  const flush = async () => {
    if (!currentTable || !batch.length) return
    await restoreBatch(currentTable, batch)
    counts[currentTable] = (counts[currentTable] ?? 0) + batch.length
    onProgress?.(`กู้คืน ${currentTable}`, counts[currentTable])
    batch = []
  }

  for await (const line of lineReader(file)) {
    const item = JSON.parse(line)
    if (!item.kind && item.format === FORMAT) {
      manifest = item
      if (manifest.version !== VERSION || manifest.scope !== 'all-public-application-tables') {
        throw new Error('เวอร์ชันหรือขอบเขตไฟล์สำรองไม่รองรับ')
      }
      continue
    }
    if (item.kind === 'end') continue
    if (item.kind === 'storage') {
      await flush()
      await restoreStorage(item)
      const key = `storage:${item.bucket}`
      counts[key] = (counts[key] ?? 0) + 1
      onProgress?.(`กู้คืนไฟล์ ${item.bucket}`, counts[key])
      continue
    }
    if (item.kind !== 'row' || !item.table || !item.row) throw new Error('รูปแบบไฟล์สำรองไม่ถูกต้อง')
    if (currentTable !== item.table) {
      await flush()
      currentTable = item.table
    }
    batch.push(item.row)
    if (batch.length >= BATCH_SIZE) await flush()
  }
  await flush()
  if (!manifest) throw new Error('ไม่พบหัวไฟล์สำรอง')

  const { error } = await supabase
    .from('academic_term_backups')
    .update({ restored_at: new Date().toISOString() })
    .eq('id', registeredBackup.id)
  if (error) console.warn('บันทึกประวัติการกู้คืนไม่สำเร็จ:', error)
  return { counts, sha256, createdAt: manifest.created_at }
}
