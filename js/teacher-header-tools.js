// Shared DOM mounting only; never import the teacher page runtime here.
const buttons = new Set()
let mobileQuery

function placeButtons() {
  const tools = document.getElementById('teacher-header-tools')
  for (const button of buttons) {
    if (!button.isConnected) { buttons.delete(button); continue }
    const target = mobileQuery.matches && tools ? tools : document.body
    if (button.parentElement !== target) target.appendChild(button)
  }
}

export function mountTeacherHeaderTool(button) {
  if (!document.getElementById('teacher-header-tools')) return false
  if (!mobileQuery) {
    mobileQuery = window.matchMedia('(max-width: 767px)')
    mobileQuery.addEventListener('change', placeButtons)
  }
  button.type = 'button'
  button.setAttribute('aria-label', button.title)
  document.body.appendChild(button)
  buttons.add(button)
  placeButtons()
  return true
}
