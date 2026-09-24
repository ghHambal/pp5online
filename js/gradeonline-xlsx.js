// สร้างไฟล์ XLSX แบบเล็กสำหรับนำเข้า GradeOnline โดยไม่ต้องพึ่งไลบรารี Excel ขนาดใหญ่

const encoder = new TextEncoder()

function xmlEscape(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function columnName(index) {
  let name = ''
  for (let n = index + 1; n > 0; n = Math.floor((n - 1) / 26)) {
    name = String.fromCharCode(65 + ((n - 1) % 26)) + name
  }
  return name
}

function cellXml(ref, value) {
  if (value == null || value === '') return ''
  if (typeof value === 'number' && Number.isFinite(value)) {
    return `<c r="${ref}"><v>${value}</v></c>`
  }
  const text = String(value)
  const preserve = /^\s|\s$/.test(text) ? ' xml:space="preserve"' : ''
  return `<c r="${ref}" t="inlineStr"><is><t${preserve}>${xmlEscape(text)}</t></is></c>`
}

function worksheetXml(rows) {
  const body = rows.map((row, rowIndex) => {
    const cells = row.map((value, columnIndex) => cellXml(`${columnName(columnIndex)}${rowIndex + 1}`, value)).join('')
    return `<row r="${rowIndex + 1}">${cells}</row>`
  }).join('')
  const lastRow = Math.max(rows.length, 1)
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <dimension ref="A1:E${lastRow}"/>
  <sheetViews><sheetView workbookViewId="0" showGridLines="1"/></sheetViews>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="34" customWidth="1"/>
    <col min="4" max="5" width="16" customWidth="1"/>
  </cols>
  <sheetData>${body}</sheetData>
  <pageMargins left="0.3" right="0.3" top="0.5" bottom="0.5" header="0.2" footer="0.2"/>
</worksheet>`
}

function safeSheetName(value) {
  const name = String(value ?? '').replace(/[\\/?*\[\]:]/g, '').trim()
  return (name || 'GradeOnline').slice(0, 31)
}

function safeFilePart(value) {
  return String(value ?? '').replace(/[\\/:*?"<>|]/g, '-').trim() || 'GradeOnline'
}

function u16(view, offset, value) { view.setUint16(offset, value, true) }
function u32(view, offset, value) { view.setUint32(offset, value >>> 0, true) }

const crcTable = (() => {
  const table = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let bit = 0; bit < 8; bit++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1)
    table[n] = c >>> 0
  }
  return table
})()

function crc32(bytes) {
  let crc = 0xffffffff
  for (const byte of bytes) crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function concatBytes(parts) {
  const total = parts.reduce((sum, part) => sum + part.length, 0)
  const result = new Uint8Array(total)
  let offset = 0
  for (const part of parts) { result.set(part, offset); offset += part.length }
  return result
}

function zipStore(files) {
  const localParts = []
  const centralParts = []
  let offset = 0

  for (const file of files) {
    const name = encoder.encode(file.name)
    const data = encoder.encode(file.content)
    const crc = crc32(data)
    const local = new Uint8Array(30 + name.length + data.length)
    const localView = new DataView(local.buffer)
    u32(localView, 0, 0x04034b50)
    u16(localView, 4, 20); u16(localView, 6, 0); u16(localView, 8, 0)
    u16(localView, 10, 0); u16(localView, 12, 0)
    u32(localView, 14, crc); u32(localView, 18, data.length); u32(localView, 22, data.length)
    u16(localView, 26, name.length); u16(localView, 28, 0)
    local.set(name, 30); local.set(data, 30 + name.length)
    localParts.push(local)

    const central = new Uint8Array(46 + name.length)
    const centralView = new DataView(central.buffer)
    u32(centralView, 0, 0x02014b50)
    u16(centralView, 4, 20); u16(centralView, 6, 20); u16(centralView, 8, 0); u16(centralView, 10, 0)
    u16(centralView, 12, 0); u16(centralView, 14, 0)
    u32(centralView, 16, crc); u32(centralView, 20, data.length); u32(centralView, 24, data.length)
    u16(centralView, 28, name.length); u16(centralView, 30, 0); u16(centralView, 32, 0)
    u16(centralView, 34, 0); u16(centralView, 36, 0); u32(centralView, 38, 0); u32(centralView, 42, offset)
    central.set(name, 46); centralParts.push(central)
    offset += local.length
  }

  const centralDirectory = concatBytes(centralParts)
  const end = new Uint8Array(22)
  const endView = new DataView(end.buffer)
  u32(endView, 0, 0x06054b50)
  u16(endView, 4, 0); u16(endView, 6, 0); u16(endView, 8, files.length); u16(endView, 10, files.length)
  u32(endView, 12, centralDirectory.length)
  u32(endView, 16, offset)
  u16(endView, 20, 0)
  return concatBytes([...localParts, centralDirectory, end])
}

export function downloadGradeOnlineXlsx({ subjectName, className, records }) {
  const headers = ['เลขที่', 'รหัสนักเรียน', 'ชื่อ-สกุล', 'คะแนนรวม', 'เกรด']
  const rows = [headers, ...records.map((record, index) => [
    index + 1,
    String(record.studentCode ?? ''),
    String(record.studentName ?? ''),
    record.total === '' || record.total == null ? '' : Number(record.total),
    String(record.grade ?? ''),
  ])]
  const sheetName = safeSheetName(subjectName || className || 'GradeOnline')
  const workbookXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="${xmlEscape(sheetName)}" sheetId="1" r:id="rId1"/></sheets>
</workbook>`
  const files = [
    { name: '[Content_Types].xml', content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>` },
    { name: '_rels/.rels', content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>` },
    { name: 'xl/workbook.xml', content: workbookXml },
    { name: 'xl/_rels/workbook.xml.rels', content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>` },
    { name: 'xl/worksheets/sheet1.xml', content: worksheetXml(rows) },
  ]
  const blob = new Blob([zipStore(files)], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = `GradeOnline-${safeFilePart(subjectName || 'รายวิชา')}-${safeFilePart(className || 'ห้องเรียน')}.xlsx`
  link.click()
  setTimeout(() => URL.revokeObjectURL(link.href), 1000)
}
