import { openHtmlPrintOverlay } from './print-overlay.js'

export const COUNCIL_SOURCE_DOCUMENT_URL = 'https://docs.google.com/document/d/1lX7v3BkGBID-xRBDB0MFDDqPvT5YAVmaF540MUGY7RI/edit'

const FORM_GROUPS = [
  ['การรับสมัครและคัดเลือก', [
    ['FORM_01_APPLICATION', '01', 'ใบสมัครสมาชิกสภานักเรียน', 'ใช้รับสมัครและเก็บข้อมูลผู้สมัคร'],
    ['FORM_02_ENDORSEMENT', '02', 'แบบรับรองผู้สมัคร', 'ใช้รับรองผู้สมัครโดยผู้มีสิทธิรับรอง'],
    ['FORM_03_INTERVIEW_YLA', '03', 'แบบสัมภาษณ์และประเมิน YLA', 'ใช้บันทึกผลสัมภาษณ์และการประเมิน YLA'],
    ['FORM_04_CHAIR_NOMINEE', '04', 'แบบเสนอผู้สมัครประธานหลัง YLA', 'ใช้เสนอรายชื่อหลังผ่านกระบวนการ YLA'],
  ]],
  ['การเลือกตั้งและแต่งตั้ง', [
    ['FORM_05_ELECTION_RULES', '05', 'แนวปฏิบัติการเลือกตั้ง', 'คู่มือและกติกาการเลือกตั้ง'],
    ['FORM_06_ELECTION_RESULT', '06', 'แบบบันทึกและรับรองผลการเลือกตั้ง', 'ใช้บันทึกและรับรองผลการเลือกตั้ง'],
    ['FORM_07_ELECTION_COMPLAINT', '07', 'แบบร้องเรียนหรือคัดค้านการเลือกตั้ง', 'ใช้ยื่นและติดตามเรื่องร้องเรียน'],
    ['FORM_08_APPOINTMENT_ROSTER', '08', 'บัญชีรายชื่อเสนอแต่งตั้ง', 'ใช้จัดทำบัญชีรายชื่อเพื่อเสนอแต่งตั้ง'],
  ]],
  ['โครงการและกิจกรรม', [
    ['FORM_09_ACTIVITY_APPROVAL', '09', 'แบบขออนุมัติจัดกิจกรรม', 'ใช้ขออนุมัติกิจกรรมก่อนดำเนินงาน'],
    ['FORM_09_1_PROJECT_PROPOSAL', '09.1', 'แบบเสนอโครงการ', 'ใช้จัดทำข้อเสนอโครงการตามแบบโรงเรียน'],
    ['FORM_10_PROJECT_REPORT', '10', 'แบบสรุปผลโครงการหรือกิจกรรม', 'ใช้สรุปผลหลังเสร็จสิ้นโครงการ'],
    ['FORM_12_CALENDAR', '12', 'แผนงานและปฏิทินกิจกรรม', 'ใช้วางแผนงานและกำหนดการกิจกรรม'],
  ]],
  ['การประชุม การติดตามงาน และการบริหารสมาชิก', [
    ['FORM_11_MEETING_MINUTES', '11', 'ระเบียบวาระและรายงานการประชุม', 'ใช้เตรียมวาระและบันทึกมติการประชุม'],
    ['FORM_13_INCIDENT', '13', 'แบบรายงานเหตุหรือพฤติกรรม', 'ใช้รายงานเหตุและพฤติกรรมที่ต้องติดตาม'],
    ['FORM_14_RESIGNATION', '14', 'แบบลาออกจากสภานักเรียน', 'ใช้ยื่นลาออกจากตำแหน่ง'],
    ['FORM_15_REPLACEMENT', '15', 'แบบเสนอแต่งตั้งทดแทนหรือปรับฝ่าย', 'ใช้เสนอการทดแทนหรือปรับฝ่าย'],
    ['FORM_19_WORK_TRACKING', '19', 'แบบติดตามงานของฝ่าย', 'ใช้ติดตามงานค้างและผลการส่งมอบงาน'],
  ]],
  ['การเงินและทรัพย์สิน', [
    ['FORM_16_MEMBER_FINANCE', '16', 'ทะเบียนการเงินรายบุคคล', 'ใช้บันทึกข้อมูลการเงินรายบุคคลตามสิทธิ์'],
    ['FORM_17_ACTIVITY_FINANCE', '17', 'สรุปบัญชีรับ–จ่ายกิจกรรม', 'ใช้สรุปการเงินของกิจกรรมแยกจากเงินสมาชิก'],
    ['FORM_18_ASSET_REGISTER', '18', 'ทะเบียนทรัพย์สินและระบบดิจิทัล', 'ใช้บันทึกทรัพย์สินและสิทธิ์ระบบ'],
    ['FORM_23_PARENT_FINANCE_CONSENT', '23', 'แบบยินยอมผู้ปกครองด้านการเงิน', 'ใช้ขอความยินยอมด้านการเงิน'],
  ]],
  ['วินัย การสิ้นสุดวาระ และบัตรประจำตัว', [
    ['FORM_20_FINAL_AGREEMENT', '20', 'แบบข้อตกลงกรณี 50 คะแนน', 'ใช้จัดทำข้อตกลงปรับปรุงการปฏิบัติหน้าที่'],
    ['FORM_21_HANDOVER', '21', 'แบบส่งมอบงานเมื่อสิ้นสุดวาระ', 'ใช้ส่งมอบเอกสาร ทรัพย์สิน และงานค้าง'],
    ['FORM_22_COUNCIL_CARD_REGISTER', '22', 'ทะเบียนบัตรประจำตัวสภานักเรียน', 'ใช้ติดตามการออกและคืนบัตรประจำตัว'],
  ]],
  ['เอกสารรับรอง ผู้ปกครอง และการแก้ไขระเบียบ', [
    ['FORM_24_REGULATION_AMENDMENT', '24', 'แบบเสนอแก้ไขเพิ่มเติมระเบียบ', 'ใช้เสนอแก้ไขระเบียบผ่านกระบวนการโรงเรียน'],
    ['FORM_25_PARTICIPATION_CERTIFICATE', '25', 'หนังสือรับรองการเข้าร่วมกิจกรรม', 'ใช้รับรองการเข้าร่วมกิจกรรมตามข้อเท็จจริง'],
    ['FORM_26_PARENT_PERMISSION', '26', 'ใบอนุญาตผู้ปกครอง', 'ใช้ขออนุญาตผู้ปกครองสำหรับกิจกรรม'],
  ]],
  ['การประเมินและการรับรองการปฏิบัติหน้าที่', [
    ['FORM_27_MEMBER_PERFORMANCE_EVALUATION', '27', 'แบบประเมินการปฏิบัติหน้าที่', 'ใช้ประเมินผลการปฏิบัติหน้าที่สมาชิก'],
    ['FORM_28_ATTENDANCE_LEAVE_REGISTER', '28', 'แบบบันทึกการเข้าร่วมและการลา', 'ใช้บันทึกการเข้าร่วม ประชุม กิจกรรม ภารกิจ และการลา'],
    ['FORM_29_ABSENCE_IMPROVEMENT_AGREEMENT', '29', 'แบบติดตามการขาดและข้อตกลง', 'ใช้ติดตามการขาดและข้อตกลงปรับปรุง'],
    ['FORM_30_CERTIFICATE_ELIGIBILITY', '30', 'สิทธิรับเกียรติบัตรและหนังสือรับรอง', 'ใช้ตรวจสอบสิทธิและหลักฐานก่อนออกเอกสารรับรอง'],
  ]],
]

const YLA_ITEMS = [
  ['YLA-00', 'ภาพรวมและสารบัญ', 'จุดเริ่มต้นสำหรับดูโครงสร้างชุดเอกสาร YLA'],
  ['YLA-01', 'โครงการกิจกรรมเสริมทักษะภาวะผู้นำ', 'รายละเอียดโครงการและวัตถุประสงค์ของ YLA'],
  ['YLA-02', 'กำหนดการดำเนินกิจกรรม', 'กำหนดการและลำดับการดำเนินกิจกรรม'],
  ['YLA-03', 'คู่มือการดำเนินกิจกรรมและฐาน', 'แนวทางดำเนินกิจกรรมและภารกิจแต่ละฐาน'],
  ['YLA-04', 'แบบบันทึกการเข้าร่วมและภารกิจ', 'บันทึกการเข้าร่วมและการทำภารกิจ'],
  ['YLA-05', 'แบบประเมินศักยภาพรายบุคคล', 'ประเมินศักยภาพและพัฒนาการของผู้เข้าร่วม'],
  ['YLA-06', 'สรุปผลและข้อเสนอการจัดฝ่าย', 'สรุปผลเพื่อประกอบการจัดสมาชิกลงฝ่าย'],
  ['YLA-07', 'รายงานผลการดำเนินกิจกรรม', 'รายงานผลหลังจบกิจกรรม YLA'],
  ['YLA-08', 'สมุดค่ายผู้เข้าร่วมกิจกรรม YLA', 'สมุดงานและบันทึกประสบการณ์ของผู้เข้าร่วม'],
  ['YLA-09', 'ใบเสนอโครงการกิจกรรม YLA', 'ข้อเสนอโครงการ YLA ตามแบบโรงเรียน'],
  ['YLA-10', 'ใบสรุปผลโครงการกิจกรรม YLA', 'สรุปผลโครงการ YLA สำหรับจัดเก็บและตรวจสอบ'],
]

const ACTIVITY_ITEMS = [
  ['ACT-01', 'การเลือกตั้งประธานสภานักเรียน', 'school_led', 'ดำเนินการเลือกตั้งอย่างเป็นธรรม โปร่งใส และตรวจสอบได้'],
  ['ACT-02', 'เสริมทักษะการดำเนินการจัดกิจกรรมและการเขียนใบโครงการ', 'school_led', 'ฝึกคิดกิจกรรม วางแผน งบประมาณ เขียนใบโครงการ ประเมิน และสรุปผล'],
  ['ACT-03', 'เสริมทักษะด้านการสื่อสารต่อหน้าสาธารณะ', 'school_led', 'ฝึกการประกาศ การเป็นพิธีกร การชี้แจงกติกา และการนำเสนอ'],
  ['ACT-04', 'เสริมทักษะด้านสื่อสร้างสรรค์', 'school_led', 'พัฒนาทักษะการผลิตสื่อดิจิทัลและการใช้ AI อย่างรับผิดชอบ'],
  ['ACT-05', 'ส่งเสริมคุณธรรมและจริยธรรม', 'school_led', 'พัฒนาความรับผิดชอบ ความซื่อสัตย์ ความยุติธรรม อามานะฮ์ และจริยธรรม'],
  ['ACT-08', 'ฟุตซอลสานสัมพันธ์ภายใน', 'council_led', 'การแข่งขันฟุตซอลนักเรียนชาย พร้อมทะเบียนเงินประกันทีมและการบริหารการแข่งขัน'],
  ['ACT-09', 'กีฬาสานสัมพันธ์หอพัก', 'council_led', 'กิจกรรมกีฬาสำหรับนักเรียนหญิงหอพัก เช่น วอลเลย์บอล แชร์บอล และกีฬาพื้นบ้าน'],
]

const forms = FORM_GROUPS.flatMap(([group, items]) => items.map(([key, code, title, description]) => ({ key, code, title, description, group })))

const RESOURCE_CONFIG = {
  forms: {
    eyebrow: 'เอกสารและแบบฟอร์มต่าง ๆ',
    title: 'ศูนย์เอกสารและแบบฟอร์ม',
    description: 'ค้นหาแบบฟอร์มตามระเบียบ 01–30 และเปิดรายการที่เกี่ยวข้องได้จากหน้าเดียว',
    sourceTab: 't.yq1xlf88ro0s',
    sourceLabel: 'เปิดแท็บเอกสารและแบบฟอร์มต้นฉบับ',
    items: forms,
  },
  yla: {
    eyebrow: 'กิจกรรม YLA',
    title: 'ชุดเอกสารกิจกรรม YLA',
    description: 'รวมเอกสาร Youth Leadership For Azizstan ตั้งแต่การเตรียมงาน การเข้าร่วม การประเมิน จนถึงสรุปผล',
    sourceTab: 't.gq6dk28nkqg8',
    sourceLabel: 'เปิดแท็บกิจกรรม YLA ต้นฉบับ',
    items: YLA_ITEMS.map(([code, title, description]) => ({ code, title, description, group: 'ชุดเอกสาร YLA' })),
  },
  activityDocs: {
    eyebrow: 'โครงการและกิจกรรมอื่น ๆ',
    title: 'ทะเบียนโครงการและกิจกรรม',
    description: 'ดูประเภทกิจกรรม เจ้าของกิจกรรม และชุดเอกสารที่ควรใช้ตั้งแต่ก่อนเริ่มงานจนถึงสรุปผล',
    sourceTab: 't.xjmanckvqq6a',
    sourceLabel: 'เปิดแท็บโครงการและกิจกรรมต้นฉบับ',
    items: ACTIVITY_ITEMS.map(([code, title, ownership, description]) => ({ code, title, description, group: ownership === 'council_led' ? 'สภาเป็นผู้ริเริ่ม/รับผิดชอบหลัก' : 'โรงเรียนหรือฝ่ายงานเป็นผู้รับผิดชอบหลัก', ownership })),
  },
}

const sourceUrlFor = tabId => `${COUNCIL_SOURCE_DOCUMENT_URL}?tab=${tabId}`

export function renderCouncilResourceCenter({ kind, esc, canOpenDocs = false }) {
  const config = RESOURCE_CONFIG[kind] ?? RESOURCE_CONFIG.forms
  const cards = config.items.map(item => `
    <article class="council-resource-card rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3" data-resource-card data-resource-search="${esc([item.code, item.title, item.description, item.group].filter(Boolean).join(' '))}">
      <div class="flex items-start gap-3">
        <span class="flex-shrink-0 rounded-lg bg-[var(--primary-soft)] text-[var(--primary)] px-2.5 py-1 text-xs font-black">${esc(item.code)}</span>
        <div class="min-w-0 flex-1">
          <h2 class="text-sm font-bold text-[var(--ink)]">${esc(item.title)}</h2>
          <p class="text-xs text-[var(--muted)] mt-1">${esc(item.description)}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 items-center text-[0.6875rem]">
        ${item.group ? `<span class="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]">${esc(item.group)}</span>` : ''}
        ${item.ownership ? `<span class="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]">${item.ownership === 'council_led' ? 'สภานำ' : 'โรงเรียนนำ'}</span>` : ''}
      </div>
      <details class="border-t border-[var(--line-soft)] pt-2">
        <summary class="cursor-pointer text-xs font-bold text-[var(--primary)]">ดูแนวทางการใช้งาน</summary>
        <p class="text-xs text-[var(--ink-2)] leading-6 mt-2">เอกสารนี้เป็นส่วนหนึ่งของชุดเอกสารสภานักเรียน สามารถใช้เป็นรายการอ้างอิงในการจัดทำงานจริง และควรบันทึกข้อมูลตามข้อเท็จจริงของกิจกรรมหรือกระบวนการนั้น</p>
      </details>
      <div class="flex flex-wrap gap-2 pt-1">
        <button type="button" class="btn-print-council-resource text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-resource-code="${esc(item.code)}" data-resource-title="${esc(item.title)}" data-resource-description="${esc(item.description)}">🖨️ พิมพ์รายการ</button>
        <a href="${esc(sourceUrlFor(config.sourceTab))}" target="_blank" rel="noopener" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]">🔗 เปิดต้นฉบับ</a>
        ${canOpenDocs && kind === 'forms' && ['FORM_09_ACTIVITY_APPROVAL', 'FORM_09_1_PROJECT_PROPOSAL'].includes(item.key) ? '<button type="button" class="goto-view text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] text-white" data-view="docs">เปิดงานเอกสารโครงการ →</button>' : ''}
      </div>
    </article>`).join('')

  return `<div class="space-y-4">
    <section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5">
      <p class="text-xs font-bold text-[var(--primary)]">📚 ${esc(config.eyebrow)}</p>
      <h1 class="text-xl font-bold text-[var(--ink)] mt-1">${esc(config.title)}</h1>
      <p class="text-sm text-[var(--muted)] mt-2 leading-6">${esc(config.description)}</p>
      <div class="flex flex-wrap gap-2 mt-4">
        ${Object.entries(RESOURCE_CONFIG).map(([id, value]) => `<button type="button" class="council-resource-kind-btn px-3 py-2 rounded-xl text-xs font-bold ${id === kind ? 'bg-[var(--primary)] text-white' : 'border border-[var(--line)] text-[var(--muted)] hover:bg-[var(--surface-2)]'}" data-resource-kind="${id}">${esc(value.eyebrow)}</button>`).join('')}
        <a href="${esc(sourceUrlFor(config.sourceTab))}" target="_blank" rel="noopener" class="px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">🔗 ดูเอกสารต้นฉบับ</a>
      </div>
    </section>
    <div class="flex gap-2">
      <input id="council-resource-search" type="search" placeholder="ค้นหารหัส ชื่อเอกสาร กิจกรรม หรือคำอธิบาย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="button" id="council-resource-clear" class="px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">ล้าง</button>
    </div>
    <p id="council-resource-count" class="text-xs text-[var(--muted)]">แสดง ${config.items.length} รายการ</p>
    <div id="council-resource-list" class="grid grid-cols-1 lg:grid-cols-2 gap-3">${cards}</div>
  </div>`
}

export function wireCouncilResourceEvents({ onKindChange, esc }) {
  document.querySelectorAll('.council-resource-kind-btn').forEach(btn => {
    btn.addEventListener('click', () => onKindChange(btn.dataset.resourceKind))
  })
  const input = document.getElementById('council-resource-search')
  const clear = document.getElementById('council-resource-clear')
  const cards = [...document.querySelectorAll('[data-resource-card]')]
  const count = document.getElementById('council-resource-count')
  const applyFilter = () => {
    const query = String(input?.value || '').trim().toLocaleLowerCase()
    let visible = 0
    cards.forEach(card => {
      const match = !query || card.dataset.resourceSearch.toLocaleLowerCase().includes(query)
      card.classList.toggle('hidden', !match)
      if (match) visible += 1
    })
    if (count) count.textContent = `แสดง ${visible} รายการ${query ? ' จากทั้งหมด ' + cards.length + ' รายการ' : ''}`
  }
  input?.addEventListener('input', applyFilter)
  clear?.addEventListener('click', () => { if (input) input.value = ''; applyFilter(); input?.focus() })
  document.querySelectorAll('.btn-print-council-resource').forEach(btn => {
    btn.addEventListener('click', () => printCouncilResource({ code: btn.dataset.resourceCode, title: btn.dataset.resourceTitle, description: btn.dataset.resourceDescription, esc }))
  })
}

function printCouncilResource({ code, title, description, esc }) {
  openHtmlPrintOverlay(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${esc(title)}</title><style>body{font-family:Arial,sans-serif;color:#17202a;padding:36px;line-height:1.8}h1{font-size:24px;margin:8px 0 20px}.code{color:#7b2d2d;font-weight:700}.meta{border-top:1px solid #ddd;border-bottom:1px solid #ddd;padding:12px 0;margin:16px 0}small{color:#666}</style></head><body><small>เอกสารสภานักเรียน โรงเรียนมูลนิธิอาซิซสถาน</small><p class="code">${esc(code)}</p><h1>${esc(title)}</h1><div class="meta">${esc(description)}</div><p>รายการนี้อยู่ในชุดเอกสารอ้างอิงของสภานักเรียน โปรดเปิดต้นฉบับหรือเอกสารฉบับที่โรงเรียนอนุมัติ เพื่อกรอกข้อมูลและใช้งานตามกระบวนการที่กำหนด</p></body></html>`)
}
