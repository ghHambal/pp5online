import { getSystemConfig, updateSystemConfig } from './api.js'
import { showToast } from './ui.js'

const setContent = html => { document.getElementById('main-content').innerHTML = html }
const setActiveNav = viewName => document.querySelectorAll('[data-nav]').forEach(el => {
  el.classList.toggle('bg-indigo-800', el.dataset.nav === viewName)
  el.classList.toggle('text-white', el.dataset.nav === viewName)
  el.classList.toggle('text-indigo-200', el.dataset.nav !== viewName)
})

export const FEATURE_HUB_CONFIG_KEY = 'pp5FeatureHubFlags'

export const FEATURE_HUB_GROUPS = [
  {
    title: 'นักเรียนที่ปรึกษา',
    description: 'ควบคุมแท็บงานในหน้าครูที่ปรึกษา',
    features: [
      ['advisor_students', 'นักเรียนที่ปรึกษา', 'เมนูและหน้ารวมนักเรียนที่ครูดูแล'],
      ['advisor_leaves', 'ใบลา/ลาป่วย', 'ตรวจคำขอลาและยืนยันการลา'],
      ['advisor_password_resets', 'ขอรีเซ็ตรหัสผ่าน', 'ตรวจและยืนยันคำขอรีเซ็ตรหัสผ่าน'],
      ['advisor_sports_checkin', 'เช็คชื่อเข้าสีวันแรก', 'บันทึกข้อมูลเช็คชื่อเข้าสีตามวันที่ตั้งไว้'],
      ['advisor_shirt_size', 'ไซซ์เสื้อ', 'จัดการข้อมูลไซซ์เสื้อของนักเรียน'],
      ['advisor_shirt_vote', 'โหวตแบบเสื้อ', 'เปิดหน้าโหวตแบบเสื้อในกลุ่มนักเรียนที่ปรึกษา'],
      ['advisor_council_nominate', 'เสนอชื่อสภา', 'เปิดรับเสนอชื่อนักเรียนตามรอบที่กำหนด'],
      ['advisor_shirt_payment', 'รับชำระค่าเสื้อ (ศาสนา)', 'บันทึกการรับชำระในห้องศาสนา'],
    ],
  },
  {
    title: 'เมนูและระบบสำหรับครู',
    description: 'ซ่อนเมนูและทางลัดหน้าเดียวกัน โดยยังใช้กฎสิทธิ์เดิมของแต่ละระบบ',
    features: [
      ['teacher_announcements', 'ประกาศ', 'หน้าอ่านประกาศสำหรับครู'],
      ['teacher_work_calendar', 'ปฏิทินปฏิบัติงาน', 'ปฏิทินงานของครู'],
      ['teacher_wen_duty', 'ระบบเวร', 'ทางเข้าไปยังระบบเวร'],
      ['teacher_council', 'ระบบสภานักเรียน', 'เมนูและทางลัดระบบสภานักเรียน'],
      ['teacher_terangganu', 'ค่าย TERANGGANU', 'เมนูค่ายสำหรับครูที่มีสิทธิ์'],
      ['teacher_regrade', 'แก้ค้างเก่า', 'เมนูแก้ค้างเก่าตามช่วงเวลาที่กำหนด'],
      ['teacher_sports', 'ระบบกีฬาสี', 'ทางเข้าภาพรวมกีฬาสี'],
      ['teacher_certificates', 'ระบบเกียรติบัตร', 'เมนูเกียรติบัตร'],
      ['teacher_my_team', 'จัดการสีของฉัน', 'พื้นที่ทำงานของครูประจำสี'],
      ['teacher_shirt_summary', 'สรุปยอดเสื้อกีฬาสี', 'สรุปยอดเสื้อสำหรับผู้มีสิทธิ์'],
      ['teacher_sports_fund', 'บัญชีเงินกีฬาสี', 'บัญชีเงินสำหรับผู้ดูแลกีฬาสี'],
      ['teacher_sports_overview', 'ภาพรวมกีฬาสี', 'ภาพรวมสำหรับผู้ดูแลกีฬาสี'],
      ['teacher_sports_competition', 'รายการแข่งขันของฉัน', 'จัดการรายการแข่งขันตามสิทธิ์'],
      ['teacher_sports_checkin', 'รับรายงานตัวนักกีฬา', 'หน้ารับรายงานตัวนักกีฬา'],
      ['teacher_sports_awards', 'ศูนย์มอบเหรียญ', 'ศูนย์มอบเหรียญสำหรับผู้ได้รับสิทธิ์'],
      ['teacher_sports_evaluation', 'ประเมินกีฬาสี', 'พื้นที่ประเมินสำหรับผู้ได้รับสิทธิ์'],
      ['teacher_shirt_vote_results', 'ผลโหวตแบบเสื้อ', 'ผลโหวตสำหรับผู้จัดการโหวต'],
      ['teacher_qr_reissue', 'พิมพ์/คำขอ QR Code', 'หน้าคำขอ QR สำหรับผู้จัดการที่ได้รับสิทธิ์'],
      ['teacher_life_skill', 'บันทึกคะแนนทักษะชีวิต', 'งานคะแนนทักษะชีวิตของห้องที่เกี่ยวข้อง'],
      ['teacher_reading', 'บันทึกคะแนนอ่านคิดวิเคราะห์', 'งานคะแนนอ่านคิดวิเคราะห์ของครูที่เกี่ยวข้อง'],
      ['teacher_prayer', 'บันทึกคะแนนละหมาด', 'งานคะแนนละหมาดและเครื่องมือที่เกี่ยวข้อง'],
    ],
  },
]

export const FEATURE_HUB_DEFAULTS = Object.fromEntries(
  FEATURE_HUB_GROUPS.flatMap(group => group.features.map(([key]) => [key, true]))
)

export function getFeatureHubFlags(config = {}) {
  let stored = config?.[FEATURE_HUB_CONFIG_KEY]
  if (typeof stored === 'string') {
    try { stored = JSON.parse(stored) } catch { stored = {} }
  }
  return { ...FEATURE_HUB_DEFAULTS, ...(stored && typeof stored === 'object' ? stored : {}) }
}

export function isFeatureHubEnabled(config, key) {
  return getFeatureHubFlags(config)[key] !== false
}

export async function renderFeatureHub() {
  setActiveNav('feature-hub')
  document.getElementById('page-title').textContent = 'ฮับจัดการฟีเจอร์'
  let config = await getSystemConfig().catch(() => ({}))
  let flags = getFeatureHubFlags(config)
  const render = () => {
    const total = Object.keys(FEATURE_HUB_DEFAULTS).length
    const enabled = Object.values(flags).filter(Boolean).length
    setContent(`<div class="max-w-5xl mx-auto space-y-5 animate-fade">
      <section class="rounded-2xl bg-indigo-50 border border-indigo-100 p-5">
        <h2 class="text-xl font-bold text-gray-900">🎚️ ฮับจัดการฟีเจอร์</h2>
        <p class="mt-1 text-sm text-gray-600">เปิดหรือซ่อนเมนูและแท็บที่เกี่ยวข้อง ครูจะเห็นเฉพาะรายการที่เปิดและยังผ่านเงื่อนไขสิทธิ์เดิมของระบบ</p>
        <p class="mt-3 text-sm font-semibold text-indigo-700">เปิดอยู่ ${enabled} จาก ${total} ฟีเจอร์ · รายการที่ยังไม่เคยตั้งค่าจะเริ่มต้นเป็นเปิด</p>
      </section>
      ${FEATURE_HUB_GROUPS.map(group => `<section class="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
        <div class="px-5 py-4 border-b border-gray-100"><h3 class="font-bold text-gray-900">${group.title}</h3><p class="text-sm text-gray-500 mt-1">${group.description}</p></div>
        <div class="divide-y divide-gray-100">${group.features.map(([key, label, detail]) => {
          const on = flags[key] !== false
          return `<div class="px-5 py-4 flex items-center gap-4 justify-between">
            <div class="min-w-0"><p class="font-semibold text-gray-800">${label}</p><p class="text-sm text-gray-500">${detail}</p></div>
            <button type="button" role="switch" aria-checked="${on}" data-feature-switch="${key}" class="shrink-0 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold transition ${on ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-600'}" ${render.saving ? 'disabled' : ''}>
              <span class="relative inline-flex h-6 w-11 items-center rounded-full ${on ? 'bg-emerald-500' : 'bg-gray-400'}"><span class="inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${on ? 'translate-x-5' : 'translate-x-1'}"></span></span>
              ${on ? 'เปิด' : 'ปิด'}
            </button>
          </div>`
        }).join('')}</div>
      </section>`).join('')}
    </div>`)
    document.querySelectorAll('[data-feature-switch]').forEach(button => button.addEventListener('click', async () => {
      const key = button.dataset.featureSwitch
      const next = { ...flags, [key]: flags[key] === false }
      button.disabled = true
      try {
        await updateSystemConfig(FEATURE_HUB_CONFIG_KEY, JSON.stringify(next))
        flags = next
        config = { ...config, [FEATURE_HUB_CONFIG_KEY]: JSON.stringify(next) }
        showToast(`บันทึก${next[key] ? 'เปิด' : 'ปิด'} “${button.parentElement.querySelector('p')?.textContent || key}” แล้ว`, 'success')
        render()
      } catch (error) {
        button.disabled = false
        showToast(`บันทึกไม่สำเร็จ: ${error?.message || 'เกิดข้อผิดพลาด'}`, 'error')
      }
    }))
  }
  render()
}
