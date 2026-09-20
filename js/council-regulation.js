import { openHtmlPrintOverlay } from './print-overlay.js'
import { showToast } from './ui.js'
import {
  getCouncilRegulationVersions,
  getCouncilRegulationContent,
  updateCouncilRegulationClause,
  createCouncilRegulationClause,
} from './council-api.js'

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const thaiDigits = value => String(value).replace(/[0-9]/g, d => '๐๑๒๓๔๕๖๗๘๙'[Number(d)])
const normalizeSearch = value => String(value ?? '')
  .replace(/[๐-๙]/g, d => String('๐๑๒๓๔๕๖๗๘๙'.indexOf(d)))
  .replace(/ข้อ\s*ที่/g, 'ข้อ')
  .replace(/\s+/g, ' ')
  .trim()
const STATUS_LABEL = {
  draft: 'ฉบับร่าง', pending_approval: 'รออนุมัติ', approved: 'อนุมัติแล้ว',
  effective: 'มีผลบังคับใช้', superseded: 'ถูกแทนที่ด้วยฉบับใหม่', archived: 'เก็บถาวร',
}

let state = {
  versions: null, selectedVersionId: null, content: null, loading: false, error: null,
  query: '', sectionFilter: 'all', editingClauseId: null, addingClause: false,
}

function selectedVersion() {
  return (state.versions ?? []).find(v => v.id === state.selectedVersionId) ?? state.versions?.[0] ?? null
}

async function loadRegulation(onChange) {
  state.loading = true
  state.error = null
  onChange()
  try {
    state.versions = await getCouncilRegulationVersions()
    state.selectedVersionId = state.selectedVersionId ?? state.versions[0]?.id ?? null
    state.content = state.selectedVersionId
      ? await getCouncilRegulationContent(state.selectedVersionId)
      : { sections: [], clauses: [] }
  } catch (error) {
    state.error = error
  } finally {
    state.loading = false
    onChange()
  }
}

async function loadSelectedVersion(onChange) {
  if (!state.selectedVersionId) return
  state.loading = true
  state.error = null
  onChange()
  try {
    state.content = await getCouncilRegulationContent(state.selectedVersionId)
  } catch (error) {
    state.error = error
  } finally {
    state.loading = false
    onChange()
  }
}

function ensureLoaded(onChange) {
  if (state.versions === null && !state.loading) loadRegulation(onChange)
}

function filteredClauses(version, sections, clauses) {
  const sectionMap = new Map(sections.map(s => [s.id, s]))
  const query = normalizeSearch(state.query).toLocaleLowerCase()
  return clauses.filter(clause => {
    const section = sectionMap.get(clause.section_id)
    if (state.sectionFilter !== 'all' && String(section?.id) !== String(state.sectionFilter)) return false
    if (!query) return true
    const haystack = [
      clause.clause_no, 'ข้อ ' + clause.clause_no, 'ข้อที่ ' + clause.clause_no,
      clause.title, clause.body, ...(clause.keywords ?? []),
      section?.title, 'หมวด ' + (section?.section_no ?? ''), version?.title,
    ].filter(Boolean).join(' ')
    const normalizedHaystack = normalizeSearch(haystack).toLocaleLowerCase()
    return normalizedHaystack.includes(query)
  })
}

function printHtml(version, sections, clauses, scopeLabel = '') {
  const groups = sections.map(section => ({
    section,
    clauses: clauses.filter(c => c.section_id === section.id),
  })).filter(g => g.clauses.length)
  const body = groups.map(group => {
    const heading = '<div class="section">หมวด ' + thaiDigits(group.section.section_no) + '<br>' + esc(group.section.title) + '</div>'
    const items = group.clauses.map(c => '<div class="clause"><span class="clause-no">ข้อ ' + thaiDigits(c.clause_no) + '</span>  ' + esc(c.body) + '</div>').join('')
    return heading + items
  }).join('')
  const source = String(version?.source_document_url ?? '').startsWith('http')
    ? '<p class="source">แหล่งต้นฉบับ: <a href="' + esc(version.source_document_url) + '">' + esc(version.source_document_url) + '</a></p>' : ''
  return '<!doctype html><html lang="th"><head><meta charset="utf-8"><title>' + esc(version?.title) + '</title><style>'
    + '@page{size:A4;margin:18mm 18mm 16mm}*{box-sizing:border-box}body{font-family:"TH SarabunPSK","TH Sarabun New",Sarabun,sans-serif;color:#111;font-size:16pt;line-height:1.35}'
    + 'h1{text-align:center;font-size:22pt;margin:0 0 3mm;font-weight:700}.meta{text-align:center;font-size:13pt;margin-bottom:7mm}'
    + '.draft{border:1px solid #9a5b00;color:#7a4200;padding:2mm;text-align:center;margin-bottom:6mm}.section{page-break-before:always;text-align:center;font-size:18pt;font-weight:700;margin:8mm 0 5mm}.section:first-child{page-break-before:auto}'
    + '.clause{margin:0 0 4mm;text-align:justify;white-space:pre-line}.clause-no{font-weight:700}.source{font-size:11pt;margin-top:10mm;color:#555}a{color:inherit}'
    + '</style></head><body><h1>' + esc(version?.title) + '</h1><div class="meta">ฉบับ ' + esc(version?.version_label)
    + ' · สถานะ: ' + esc(STATUS_LABEL[version?.status] || version?.status) + '</div>'
    + (scopeLabel ? '<div class="meta">' + esc(scopeLabel) + ' · ' + clauses.length + ' ข้อ</div>' : '')
    + (version?.status !== 'effective' ? '<div class="draft">เอกสารฉบับร่าง/เอกสารอ้างอิง ยังไม่ใช่ระเบียบที่มีผลบังคับใช้</div>' : '')
    + body + source + '</body></html>'
}

function clauseEditor(clause) {
  return '<form class="regulation-edit-form border border-[var(--primary-soft-line)] bg-[var(--primary-soft)] rounded-2xl p-4 mt-2" data-regulation-edit="' + clause.id + '">'
    + '<p class="text-sm font-bold text-[var(--ink)] mb-3">แก้ไขข้อ ' + thaiDigits(clause.clause_no) + '</p>'
    + '<label class="block text-xs font-bold text-[var(--muted)] mb-1">หัวข้อ</label>'
    + '<input name="title" value="' + esc(clause.title) + '" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)] mb-3">'
    + '<label class="block text-xs font-bold text-[var(--muted)] mb-1">เนื้อหาข้อ</label>'
    + '<textarea name="body" rows="8" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm leading-6 bg-[var(--surface)] text-[var(--ink)]">' + esc(clause.body) + '</textarea>'
    + '<label class="block text-xs font-bold text-[var(--muted)] mt-3 mb-1">คำค้น (คั่นด้วยจุลภาค)</label>'
    + '<input name="keywords" value="' + esc((clause.keywords ?? []).join(', ')) + '" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]">'
    + '<div class="flex gap-2 mt-3"><button class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold" type="submit">บันทึกฉบับร่าง</button>'
    + '<button class="regulation-cancel-edit px-4 py-2 rounded-xl border border-[var(--line)] text-xs font-bold" type="button">ยกเลิก</button></div></form>'
}

function clauseCard(clause, section, canEdit) {
  if (state.editingClauseId === clause.id && canEdit) return clauseEditor(clause)
  const title = String(clause.title ?? '').trim()
  const body = String(clause.body ?? '')
  const showTitle = title && !body.startsWith(title)
  return '<article class="border border-[var(--line-soft)] bg-[var(--surface)] rounded-2xl p-4 shadow-sm">'
    + '<div class="flex items-start justify-between gap-3"><div class="min-w-0"><p class="text-sm font-bold text-[var(--primary)]">ข้อ ' + thaiDigits(clause.clause_no) + '</p>'
    + (showTitle ? '<p class="text-sm font-semibold text-[var(--ink)] mt-1">' + esc(title) + '</p>' : '') + '</div>'
    + (canEdit ? '<button type="button" class="regulation-edit-clause flex-shrink-0 px-3 py-1.5 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]" data-id="' + clause.id + '">แก้ไข</button>' : '')
    + '</div><div class="text-sm leading-7 text-[var(--ink-2)] mt-3 whitespace-pre-line">' + esc(clause.body) + '</div>'
    + '<p class="text-[0.6875rem] text-[var(--muted-2)] mt-3">หมวด ' + thaiDigits(section.section_no) + ' · ' + esc(section.title) + '</p></article>'
}

function addForm(sections) {
  return '<form id="regulation-add-form" class="bg-[var(--surface)] border border-[var(--primary-soft-line)] rounded-2xl p-5">'
    + '<h2 class="font-bold text-[var(--ink)]">เพิ่มข้อในฉบับร่าง</h2><div class="grid md:grid-cols-3 gap-3 mt-3">'
    + '<label class="text-xs font-bold text-[var(--muted)]">หมวด<select name="sectionId" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]">'
    + sections.map(s => '<option value="' + s.id + '">หมวด ' + thaiDigits(s.section_no) + ' · ' + esc(s.title) + '</option>').join('')
    + '</select></label><label class="text-xs font-bold text-[var(--muted)]">เลขข้อ<input name="clauseNo" type="number" min="1" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></label>'
    + '<label class="text-xs font-bold text-[var(--muted)]">หัวข้อ<input name="title" class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></label></div>'
    + '<label class="block text-xs font-bold text-[var(--muted)] mt-3">เนื้อหา<textarea name="body" rows="6" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm leading-6 bg-[var(--surface)] text-[var(--ink)]"></textarea></label>'
    + '<div class="flex gap-2 mt-3"><button type="submit" class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">เพิ่มฉบับร่าง</button>'
    + '<button type="button" class="regulation-cancel-add px-4 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">ยกเลิก</button></div></form>'
}

export function renderCouncilRegulationView(ctx, onChange = () => {}) {
  ensureLoaded(onChange)
  if (state.loading && state.versions === null) return '<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">กำลังโหลดระเบียบสภานักเรียน...</div></div>'
  if (state.error) return '<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-red-200 rounded-2xl p-6 text-center"><p class="text-sm font-bold text-red-700">โหลดระเบียบไม่สำเร็จ</p><p class="text-xs text-[var(--muted)] mt-2">' + esc(state.error.message || state.error) + '</p><button type="button" class="regulation-retry mt-4 px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">ลองใหม่</button></div></div>'
  const version = selectedVersion()
  if (!version) return '<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีระเบียบในระบบ</div></div>'
  const sections = state.content?.sections ?? []
  const clauses = state.content?.clauses ?? []
  const sectionMap = new Map(sections.map(s => [s.id, s]))
  const filtered = filteredClauses(version, sections, clauses)
  const grouped = sections.map(section => ({ section, clauses: filtered.filter(c => c.section_id === section.id) })).filter(g => g.clauses.length)
  const canEdit = !!ctx?.isAdmin && ['draft', 'pending_approval'].includes(version.status)
  const hasFilter = Boolean(normalizeSearch(state.query) || state.sectionFilter !== 'all')
  if (state.loading && state.content === null) return '<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">กำลังโหลดฉบับที่เลือก...</div></div>'
  let html = '<div class="max-w-5xl mx-auto space-y-4"><section class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 md:p-6">'
    + '<div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4"><div><p class="text-xs font-bold text-[var(--primary)] mb-1">📚 ระเบียบและประกาศ</p>'
    + '<h1 class="text-xl md:text-2xl font-bold text-[var(--ink)]">' + esc(version.title) + '</h1><p class="text-xs text-[var(--muted)] mt-2">ฉบับ '
    + esc(version.version_label) + ' · ' + esc(STATUS_LABEL[version.status] || version.status) + ' · โหมด ' + (version.implementation_mode === 'enforced' ? 'บังคับใช้' : 'อ้างอิง/เตรียมการ') + '</p></div>'
    + '<div class="flex flex-wrap gap-2"><button type="button" class="regulation-print px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">🖨️ ' + (hasFilter ? 'พิมพ์ผลการค้นหา' : 'พิมพ์ฉบับนี้') + '</button>'
    + (version.source_document_url ? '<a href="' + esc(version.source_document_url) + '" target="_blank" rel="noopener" class="px-4 py-2.5 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🔗 เปิดต้นฉบับ</a>' : '')
    + (canEdit ? '<button type="button" class="regulation-add-clause px-4 py-2.5 rounded-xl border border-[var(--primary-soft-line)] text-[var(--primary)] text-xs font-bold">➕ เพิ่มข้อ</button>' : '')
    + '</div></div><div class="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-900"><strong>สถานะสำคัญ:</strong> ฉบับนี้เป็นฉบับร่าง/ฉบับรออนุมัติ ใช้ติดตามและเตรียมงาน ยังไม่ใช่ระเบียบที่มีผลบังคับใช้</div>'
  if (state.versions.length > 1) {
    html += '<label class="block text-xs font-bold text-[var(--muted)] mt-4">เลือกฉบับ</label><select id="regulation-version-select" class="mt-1 w-full md:max-w-md border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">'
      + state.versions.map(v => '<option value="' + v.id + '" ' + (v.id === version.id ? 'selected' : '') + '>' + esc(v.version_label) + ' · ' + esc(STATUS_LABEL[v.status] || v.status) + '</option>').join('') + '</select>'
  }
  html += '</section>'
  if (state.addingClause && canEdit) html += addForm(sections)
  html += '<section class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5"><form id="regulation-search-form" class="flex flex-col md:flex-row gap-2">'
    + '<input id="regulation-search" value="' + esc(state.query) + '" placeholder="ค้นหา เช่น ข้อที่ 15, การเลือกตั้ง, การเงิน, การลาออก" class="flex-1 border border-[var(--line)] rounded-xl px-4 py-3 text-sm bg-[var(--surface)] text-[var(--ink)]">'
    + '<select id="regulation-section-filter" class="border border-[var(--line)] rounded-xl px-3 py-3 text-sm bg-[var(--surface)] text-[var(--ink)]"><option value="all">ทุกหมวด</option>'
    + sections.map(s => '<option value="' + s.id + '" ' + (String(state.sectionFilter) === String(s.id) ? 'selected' : '') + '>หมวด ' + thaiDigits(s.section_no) + ' · ' + esc(s.title) + '</option>').join('')
    + '</select><button type="submit" class="px-5 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">ค้นหา</button></form>'
    + '<div class="flex items-center justify-between gap-3 mt-4"><p class="text-xs text-[var(--muted)]">แสดง ' + filtered.length + ' จาก ' + clauses.length + ' ข้อ · แยกตามหมวด</p>'
    + ((state.query || state.sectionFilter !== 'all') ? '<button type="button" class="regulation-clear-filter text-xs font-bold text-[var(--primary)]">ล้างตัวกรอง</button>' : '') + '</div></section>'
  html += grouped.length ? grouped.map(group => '<details open class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden"><summary class="cursor-pointer list-none px-5 py-4 bg-[var(--surface-2)] flex items-center justify-between gap-3"><span class="font-bold text-[var(--ink)]">หมวด ' + thaiDigits(group.section.section_no) + ' · ' + esc(group.section.title) + '</span><span class="text-xs text-[var(--muted)]">' + group.clauses.length + ' ข้อ</span></summary><div class="p-4 space-y-3">' + group.clauses.map(c => clauseCard(c, sectionMap.get(c.section_id), canEdit)).join('') + '</div></details>').join('')
    : '<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบข้อที่ตรงกับการค้นหา</div>'
  return html + '</div>'
}

export function wireCouncilRegulationEvents(ctx, onChange) {
  document.querySelector('.regulation-retry')?.addEventListener('click', () => loadRegulation(onChange))
  document.getElementById('regulation-version-select')?.addEventListener('change', e => {
    state.selectedVersionId = Number(e.target.value)
    state.content = null
    loadSelectedVersion(onChange)
  })
  document.getElementById('regulation-section-filter')?.addEventListener('change', e => { state.sectionFilter = e.target.value; onChange() })
  document.getElementById('regulation-search-form')?.addEventListener('submit', e => {
    e.preventDefault()
    state.query = document.getElementById('regulation-search')?.value ?? ''
    onChange()
  })
  document.querySelector('.regulation-clear-filter')?.addEventListener('click', () => { state.query = ''; state.sectionFilter = 'all'; onChange() })
  document.querySelector('.regulation-print')?.addEventListener('click', () => {
    const version = selectedVersion()
    if (version) {
      const sections = state.content?.sections ?? []
      const clauses = state.content?.clauses ?? []
      const filtered = filteredClauses(version, sections, clauses)
      const scopeLabel = state.query.trim() || state.sectionFilter !== 'all' ? 'ผลการค้นหา/ตัวกรอง' : ''
      openHtmlPrintOverlay(printHtml(version, sections, filtered, scopeLabel))
    }
  })
  if (!ctx?.isAdmin) return
  document.querySelector('.regulation-add-clause')?.addEventListener('click', () => { state.addingClause = true; onChange() })
  document.querySelector('.regulation-cancel-add')?.addEventListener('click', () => { state.addingClause = false; onChange() })
  document.querySelectorAll('.regulation-edit-clause').forEach(button => button.addEventListener('click', () => { state.editingClauseId = Number(button.dataset.id); onChange() }))
  document.querySelectorAll('.regulation-cancel-edit').forEach(button => button.addEventListener('click', () => { state.editingClauseId = null; onChange() }))
  document.querySelectorAll('.regulation-edit-form').forEach(form => form.addEventListener('submit', async e => {
    e.preventDefault()
    const formData = new FormData(form)
    const body = String(formData.get('body') ?? '').trim()
    if (!body) return
    const button = form.querySelector('button[type="submit"]')
    if (button) button.disabled = true
    try {
      await updateCouncilRegulationClause({
        clauseId: Number(form.dataset.regulationEdit),
        title: String(formData.get('title') ?? '').trim(),
        body,
        keywords: String(formData.get('keywords') ?? '').split(',').map(x => x.trim()).filter(Boolean),
      })
      state.editingClauseId = null
      state.content = await getCouncilRegulationContent(state.selectedVersionId)
      showToast('บันทึกฉบับร่างแล้ว ✅', 'success')
      onChange()
    } catch (error) {
      showToast('บันทึกไม่สำเร็จ: ' + (error.message || error), 'error')
      if (button) button.disabled = false
    }
  }))
  document.getElementById('regulation-add-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const body = String(formData.get('body') ?? '').trim()
    const clauseNo = Number(formData.get('clauseNo'))
    if (!body || !Number.isInteger(clauseNo) || clauseNo < 1) return
    const button = form.querySelector('button[type="submit"]')
    if (button) button.disabled = true
    try {
      await createCouncilRegulationClause({
        versionId: state.selectedVersionId,
        sectionId: Number(formData.get('sectionId')),
        clauseNo,
        title: String(formData.get('title') ?? '').trim(),
        body,
        keywords: [],
      })
      state.addingClause = false
      state.content = await getCouncilRegulationContent(state.selectedVersionId)
      showToast('เพิ่มข้อในฉบับร่างแล้ว ✅', 'success')
      onChange()
    } catch (error) {
      showToast('เพิ่มข้อไม่สำเร็จ: ' + (error.message || error), 'error')
      if (button) button.disabled = false
    }
  })
}
