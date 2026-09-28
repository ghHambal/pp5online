const params = new URLSearchParams(window.location.search)
const targetName = params.get('sport_name')?.trim() || ''
const targetGender = params.get('sport_gender')?.trim() || ''

if (params.get('tab') === 'p3' && targetName) {
  const normalize = value => String(value || '').replace(/\s+/g, ' ').trim()
  const textOf = element => normalize(element?.textContent)
  const clickGender = () => {
    if (!['M', 'W'].includes(targetGender)) return true
    const label = targetGender === 'W' ? '👧 หญิง' : '👦 ชาย'
    const button = [...document.querySelectorAll('button')].find(element => textOf(element) === label)
    if (!button) return false
    if (!button.className.includes(targetGender === 'W' ? 'bg-rose-600' : 'bg-emerald-600')) button.click()
    return true
  }
  const setSearchValue = (input, value) => {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set
    setter?.call(input, value)
    input.dispatchEvent(new Event('input', { bubbles: true }))
  }
  const chooseSport = () => {
    if (!clickGender()) return false
    const trigger = [...document.querySelectorAll('button.form-select-premium')].find(element => textOf(element) !== targetName)
    if (trigger && textOf(trigger) !== targetName) trigger.click()
    const search = [...document.querySelectorAll('input')].find(input => input.placeholder === 'พิมพ์ชื่อกีฬา...')
    if (search) setSearchValue(search, targetName)
    const option = [...document.querySelectorAll('button')].find(element => textOf(element) === targetName)
    if (!option) return false
    option.click()
    window.history.replaceState({}, '', `${window.location.pathname}?tab=p3`)
    return true
  }
  const startedAt = Date.now()
  const timer = window.setInterval(() => {
    if (chooseSport() || Date.now() - startedAt > 30000) window.clearInterval(timer)
  }, 150)
}
