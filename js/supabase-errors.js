// Compatibility fallback is allowed only for the specific missing API shape.
export function isMissingColumn(error, name) {
  return ['42703', 'PGRST204'].includes(error?.code)
    && new RegExp(`\\b${name}\\b`, 'i').test(error.message ?? '')
}

export function isMissingFunction(error, name) {
  return ['42883', 'PGRST202'].includes(error?.code)
    && new RegExp(`\\b${name}\\b`, 'i').test(error.message ?? '')
}
