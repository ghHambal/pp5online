// js/confetti-loader.js — lazy CDN loader for canvas-confetti, mirroring
// katex-loader.js's pattern (no local npm dependency, load once on demand).
export const loadConfetti = () => new Promise((resolve) => {
  if (window.confetti) { resolve(); return }
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js'
  script.onload = () => resolve()
  script.onerror = () => resolve() // fail silently — celebration is cosmetic, never block the result screen
  document.head.appendChild(script)
})

// tier: 'high' | 'mid' | null — scales the celebration to how well the student did.
export function fireConfetti(tier) {
  if (!window.confetti || !tier) return
  try {
    if (tier === 'high') {
      window.confetti({ particleCount: 140, spread: 80, origin: { y: 0.6 } })
      setTimeout(() => window.confetti({ particleCount: 60, spread: 100, origin: { y: 0.5 } }), 250)
    } else {
      window.confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } })
    }
  } catch (err) {
    console.warn('confetti failed', err)
  }
}
