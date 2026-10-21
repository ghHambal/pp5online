// Shared DOM mounting only; never import the teacher page runtime here.
export function mountTeacherHeaderTool(button) {
  const tools = document.getElementById('teacher-header-tools')
  if (!tools) return false
  button.type = 'button'
  button.setAttribute('aria-label', button.title)
  tools.appendChild(button)
  return true
}
