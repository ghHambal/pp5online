import { supabase } from './supabase.js'
import {
  WORKLOAD_CONFIG_KEY,
  WORKLOAD_FEATURES,
  defaultWorkloadConfig,
  normalizeWorkloadConfig,
  workloadState,
} from './workload-schedule.js'

const CACHE_TTL_MS = 5 * 60 * 1000
const STORAGE_KEY = 'pp5:workloadSchedule'
const CHANGE_EVENT = 'pp5:workload-config-changed'

let configCache = null
let configExpiresAt = 0
let configInFlight = null

function readStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed?.config || Number(parsed.expiresAt) <= Date.now()) return null
    return normalizeWorkloadConfig(parsed.config)
  } catch { return null }
}

function writeStorage(config) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ config, expiresAt: Date.now() + CACHE_TTL_MS })) } catch {}
}

function publishConfigChange(config) {
  configCache = normalizeWorkloadConfig(config)
  configExpiresAt = Date.now() + CACHE_TTL_MS
  writeStorage(configCache)
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: configCache }))
}

export async function getWorkloadConfig({ force = false } = {}) {
  if (!force && configCache && configExpiresAt > Date.now()) return configCache
  if (!force) {
    const stored = readStorage()
    if (stored) {
      configCache = stored
      configExpiresAt = Date.now() + CACHE_TTL_MS
      return stored
    }
  }
  if (configInFlight) return configInFlight
  configInFlight = (async () => {
    const { data, error } = await supabase.from('system_config').select('value').eq('key', WORKLOAD_CONFIG_KEY).maybeSingle()
    if (error) throw error
    const config = data?.value ? normalizeWorkloadConfig(JSON.parse(data.value)) : defaultWorkloadConfig()
    configCache = config
    configExpiresAt = Date.now() + CACHE_TTL_MS
    writeStorage(config)
    return config
  })().finally(() => { configInFlight = null })
  return configInFlight
}

export async function saveWorkloadConfig(config) {
  const normalized = normalizeWorkloadConfig(config)
  const { error } = await supabase.from('system_config').upsert({
    key: WORKLOAD_CONFIG_KEY,
    value: JSON.stringify(normalized),
    updated_at: new Date().toISOString(),
  }, { onConflict: 'key' })
  if (error) throw error
  publishConfigChange(normalized)
  return normalized
}

export async function getWorkloadState(featureKey, now = new Date()) {
  const config = await getWorkloadConfig()
  return { ...workloadState(featureKey, now, config), config }
}

export async function isWorkloadActive(featureKey, now = new Date()) {
  const state = await getWorkloadState(featureKey, now)
  return state.active
}

export function startFeatureWorkload(featureKey, handlers = {}) {
  return handlers.start?.(featureKey)
}

export function stopFeatureWorkload(featureKey, handlers = {}) {
  return handlers.stop?.(featureKey)
}

export function watchWorkload(featureKey, { start, stop, onStateChange, refreshMs = CACHE_TTL_MS } = {}) {
  let stopped = false
  let active = false
  let timer = null
  let syncPromise = null

  const schedule = state => {
    if (timer) clearTimeout(timer)
    const transition = state.nextTransitionAt ? Math.max(1000, new Date(state.nextTransitionAt).getTime() - Date.now() + 1000) : refreshMs
    timer = setTimeout(sync, Math.min(refreshMs, transition))
  }
  const sync = async () => {
    if (stopped || syncPromise) return syncPromise
    syncPromise = (async () => {
      try {
        const state = await getWorkloadState(featureKey)
        if (state.active !== active) {
          active = state.active
          if (active) await startFeatureWorkload(featureKey, { start })
          else await stopFeatureWorkload(featureKey, { stop })
          await onStateChange?.(state)
        }
        schedule(state)
        return state
      } catch (error) {
        // Fail closed for background workload when config cannot be read.
        if (active) { active = false; await stopFeatureWorkload(featureKey, { stop }).catch(() => {}) }
        await onStateChange?.({ featureKey, active: false, status: 'UNKNOWN', error })
        timer = setTimeout(sync, refreshMs)
        return null
      } finally { syncPromise = null }
    })()
    return syncPromise
  }
  const onConfigChange = () => { sync() }
  window.addEventListener(CHANGE_EVENT, onConfigChange)
  window.addEventListener('storage', event => { if (event.key === STORAGE_KEY) sync() })
  sync()
  return {
    sync,
    stop: async () => {
      stopped = true
      if (timer) clearTimeout(timer)
      window.removeEventListener(CHANGE_EVENT, onConfigChange)
      if (active) { active = false; await stopFeatureWorkload(featureKey, { stop }).catch(() => {}) }
    },
  }
}

export { WORKLOAD_FEATURES, CHANGE_EVENT, CACHE_TTL_MS }
