import { getWorkloadState } from './workload-scheduler.js'

const VERSION = '10.22.810'
const base = location.pathname.startsWith('/pp5online/') ? '/pp5online/' : '/'

const loadScript = (src) => new Promise((resolve, reject) => {
  const script = document.createElement('script')
  script.type = 'module'
  script.crossOrigin = 'anonymous'
  script.src = `${base}${src}?v=${VERSION}`
  script.onload = resolve
  script.onerror = () => reject(new Error(`ไม่สามารถโหลด ${src}`))
  document.head.appendChild(script)
})

const bootstrap = async () => {
  const stylesheet = document.createElement('link')
  stylesheet.rel = 'stylesheet'
  stylesheet.crossOrigin = 'anonymous'
  stylesheet.href = `${base}azizgames/assets/index-B_roTS1t.css?v=${VERSION}`
  document.head.appendChild(stylesheet)

  let active = true
  try {
    active = (await getWorkloadState('azizgames')).active
  } catch (error) {
    // A schedule lookup must not blank the scoring system. The live page can
    // still load while the schedule service is temporarily unavailable.
    console.warn('AZIZGAMES workload schedule unavailable; continuing in live mode', error)
  }
  window.__pp5Workload = { isActive: key => key === 'azizgames' ? active : true }
  window.addEventListener('storage', event => {
    if (event.key === 'pp5:workloadSchedule') window.location.reload()
  })

  // Install the storage quota guard before React starts writing its caches.
  await loadScript('azizgames-public-controls.js')
  await loadScript('azizgames/assets/index-DMQe507M.js')
}

bootstrap().catch(error => {
  console.error('AZIZGAMES bootstrap failed', error)
  document.body.insertAdjacentHTML('beforeend', '<p style="padding:24px;color:#fda4af;font-family:sans-serif">ระบบกีฬาสีโหลดไม่สำเร็จ กรุณารีเฟรชหน้าอีกครั้ง</p>')
})
