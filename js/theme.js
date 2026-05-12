import { supabase } from './supabase.js'

let _themeCache = null

const DEFAULTS = {
  appColor: '#4f46e5',
  adminColor: '#4f46e5',
  loginColor: '#4f46e5',
  teacherDefaultColor: '#059669',
  teacherLanguageColor: '#2563eb',
  teacherLifeColor: '#059669',
  teacherAcademicColor: '#ea580c',
  teacherVocColor: '#7c3aed',
  teacherReligionColor: '#b45309',
  studentColor: '#0891b2',
}

const isHex = value => /^#[0-9a-f]{6}$/i.test(String(value ?? '').trim())
const safeHex = (value, fallback = DEFAULTS.appColor) => isHex(value) ? value : fallback

function hexToRgb(hex) {
  const h = safeHex(hex).slice(1)
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  }
}

function rgbToHex({ r, g, b }) {
  return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('')
}

function mix(hex, target, amount) {
  const a = hexToRgb(hex)
  const b = hexToRgb(target)
  return rgbToHex({
    r: a.r + (b.r - a.r) * amount,
    g: a.g + (b.g - a.g) * amount,
    b: a.b + (b.b - a.b) * amount,
  })
}

function teacherColor(cfg, teacher = {}) {
  const subjectGroup = teacher.subject_group ?? ''
  const skillGroup = teacher.skill_group ?? ''
  const category = teacher.category ?? ''
  if (category === 'ศาสนา' || subjectGroup === 'AGM' || subjectGroup === 'AGMVOC') return cfg.teacherReligionColor
  if (subjectGroup === 'ACDMVOC' || skillGroup === 'สามัญปวช') return cfg.teacherVocColor
  if (skillGroup === 'ภาษา') return cfg.teacherLanguageColor
  if (skillGroup === 'ชีวิต') return cfg.teacherLifeColor
  if (skillGroup === 'วิชาการ') return cfg.teacherAcademicColor
  return cfg.teacherDefaultColor
}

export async function getThemeConfig(force = false) {
  if (_themeCache && !force) return _themeCache
  const { data, error } = await supabase.from('system_config').select('key, value')
  if (error) throw error
  _themeCache = { ...DEFAULTS, ...Object.fromEntries((data ?? []).map(r => [r.key, r.value])) }
  return _themeCache
}

export function pickThemeColor(cfg = {}, role = 'app', context = {}) {
  if (role === 'admin') return safeHex(cfg.adminColor, cfg.appColor || DEFAULTS.adminColor)
  if (role === 'teacher') return safeHex(teacherColor(cfg, context), cfg.teacherDefaultColor || DEFAULTS.teacherDefaultColor)
  if (role === 'student') return safeHex(cfg.studentColor, cfg.appColor || DEFAULTS.studentColor)
  if (role === 'login') return safeHex(cfg.loginColor, cfg.appColor || DEFAULTS.loginColor)
  return safeHex(cfg.appColor, DEFAULTS.appColor)
}

function applyLogo(cfg = {}) {
  const logoUrls = [cfg.loginLogoUrl, cfg.samaiLogoUrl, cfg.porworLogoUrl]
    .map(url => String(url ?? '').trim())
    .filter(Boolean)
  const uniqueLogoUrls = [...new Set(logoUrls)]

  const applyImage = (img, fallback) => {
    let index = 0

    img.classList.add('hidden')
    fallback?.classList.remove('hidden')
    if (!uniqueLogoUrls.length) {
      img.removeAttribute('src')
      return
    }

    img.onload = () => {
      img.classList.remove('hidden')
      fallback?.classList.add('hidden')
    }
    img.onerror = () => {
      index += 1
      if (index < uniqueLogoUrls.length) {
        img.src = uniqueLogoUrls[index]
        return
      }

      img.classList.add('hidden')
      fallback?.classList.remove('hidden')
      img.removeAttribute('src')
    }
    img.src = uniqueLogoUrls[index]
  }

  document.querySelectorAll('[data-theme-logo]').forEach(img => {
    applyImage(img, img.parentElement?.querySelector('[data-theme-logo-fallback]'))
  })

  const sidebarLogo = document.getElementById('school-logo')
  const sidebarFallback = document.getElementById('school-logo-fallback')
  if (sidebarLogo) applyImage(sidebarLogo, sidebarFallback)
}

export async function applyThemeForRole(role = 'app', context = {}, force = false) {
  const cfg = await getThemeConfig(force).catch(() => ({ ...DEFAULTS }))
  const primary = pickThemeColor(cfg, role, context)
  const root = document.documentElement
  const dark = mix(primary, '#000000', 0.35)
  const soft = mix(primary, '#ffffff', 0.88)
  const ring = mix(primary, '#ffffff', 0.78)

  document.body.dataset.themeRole = role
  root.style.setProperty('--theme-primary', primary)
  root.style.setProperty('--theme-primary-dark', dark)
  root.style.setProperty('--theme-primary-soft', soft)
  root.style.setProperty('--theme-primary-ring', ring)
  root.style.setProperty('--theme-primary-rgb', `${hexToRgb(primary).r} ${hexToRgb(primary).g} ${hexToRgb(primary).b}`)
  root.style.setProperty('--theme-gradient', `linear-gradient(135deg, ${primary}, ${mix(primary, '#7c3aed', 0.35)})`)
  root.style.setProperty('--theme-login-bg', `linear-gradient(135deg, ${dark} 0%, ${primary} 52%, ${mix(primary, '#2563eb', 0.4)} 100%)`)

  const sidebar = document.getElementById('sidebar')
  if (sidebar) sidebar.style.background = dark
  applyLogo(cfg)
}
