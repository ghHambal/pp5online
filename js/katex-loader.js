// js/katex-loader.js
// Shared KaTeX CDN loader — used by the quiz question editor (teacher-views-quiz-banks.js)
// and the standalone exam runtime (quiz-exam.js), which don't share a module graph.
export const loadKaTeX = () => new Promise((resolve) => {
  if (window.renderMathInElement) { resolve(); return }
  if (!document.getElementById('katex-css')) {
    const link = document.createElement('link')
    link.id = 'katex-css'
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css'
    document.head.appendChild(link)
  }
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js'
  script.onload = () => {
    const scriptAuto = document.createElement('script')
    scriptAuto.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js'
    scriptAuto.onload = () => resolve()
    document.head.appendChild(scriptAuto)
  }
  document.head.appendChild(script)
})

const KATEX_DELIMITERS = [
  { left: '$$', right: '$$', display: true },
  { left: '$', right: '$', display: false },
  { left: '\\(', right: '\\)', display: false },
  { left: '\\[', right: '\\]', display: true }
]

export function renderMathIn(container) {
  if (!window.renderMathInElement || !container) return
  try {
    window.renderMathInElement(container, { delimiters: KATEX_DELIMITERS, throwOnError: false })
  } catch (err) {
    console.error('Math rendering failed:', err)
  }
}
