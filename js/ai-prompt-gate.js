/** Keep external-AI prompt copying locked until the displayed prompt was generated. */
export function createAIPromptCopyGate({
  copyButton,
  watchRoot = null,
  watchSelector = 'input, textarea, select',
  ignoreSelector = '',
  statusElement = null,
} = {}) {
  if (!copyButton) throw new Error('A prompt copy button is required')
  let ready = false

  const render = (isReady, message = '') => {
    ready = isReady
    copyButton.hidden = !isReady
    copyButton.disabled = !isReady
    copyButton.setAttribute('aria-disabled', String(!isReady))
    if (statusElement && message) statusElement.textContent = message
  }
  const invalidate = () => {
    if (!ready) return
    render(false, 'ข้อมูลเปลี่ยนแปลง · กด “⚡ สร้าง Prompt” ใหม่ก่อนคัดลอก')
  }

  render(false, 'ยังไม่ได้สร้าง Prompt · กด “⚡ สร้าง Prompt” ก่อนคัดลอก')
  if (watchRoot) {
    const onChange = event => {
      const target = event.target
      if (!(target instanceof Element) || !target.matches(watchSelector)) return
      if (ignoreSelector && target.matches(ignoreSelector)) return
      invalidate()
    }
    watchRoot.addEventListener('input', onChange)
    watchRoot.addEventListener('change', onChange)
  }

  return {
    markGenerated(message = 'Prompt สร้างจากข้อมูลล่าสุดแล้ว · พร้อมคัดลอก') {
      render(true, message)
    },
    invalidate,
    isReady: () => ready,
  }
}
