import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { stripTypeScriptTypes } from 'node:module';
import { emptySchedule, validateSchedule, scheduledTier } from '../supabase/functions/autoscale-tick/schedule.js';

const raw = fs.readFileSync(new URL('../supabase/functions/autoscale-tick/index.ts', import.meta.url), 'utf8');
const code = stripTypeScriptTypes(raw.replace(/^import .*\n/gm, '').replace('async function notify(title: string, message: string) {', 'async function notify(title: string, message: string) { return;'));
const active = { schemaVersion: 1, enabled: true, periods: [{ startDate: '2020-01-01', endDate: '2099-12-31', days: Array.from({ length: 7 }, () => ({ enabled: true, start: '00:00', end: '23:59' })) }] };
async function scenario({ config = active, state = {}, tier = 'ci_micro', healthy = true, failure = '', dbError = false } = {}) {
  let patches = 0;
  let reads = 0;
  const store = { ...state };
  const admin = { from: () => ({ select() { return this; }, eq(_key, value) { this.key = value; return this; }, async maybeSingle() { return { data: { value: JSON.stringify(this.key === 'autoscaleState' ? store : config) }, error: dbError ? new Error('db failed') : null }; }, async upsert(row) { Object.assign(store, JSON.parse(row.value)); return { error: null }; } }) };
  const sandbox = vm.createContext({ console: { log() {}, error() {}, warn() {} }, Date, JSON, setTimeout, AbortSignal, emptySchedule, validateSchedule, scheduledTier, createClient: () => admin, Deno: { env: { get: key => key === 'SUPABASE_URL' ? 'https://test.supabase.co' : 'fake' }, serve() {} }, fetch: async (url, options = {}) => {
    if (options.method === 'PATCH') { patches++; return { ok: !failure, status: failure ? 429 : 200, text: async () => failure || '{}' }; }
    reads++;
    if (url.includes('/health')) return { ok: true, text: async () => JSON.stringify([{ status: healthy ? 'ACTIVE_HEALTHY' : 'UNHEALTHY' }]) };
    return { ok: true, text: async () => JSON.stringify({ selected_addons: tier ? [{ type: 'compute_instance', variant: { id: tier } }] : [] }) };
  } });
  vm.runInContext(code, sandbox);
  const run = () => vm.runInContext('runAutoscale()', sandbox);
  if (dbError) { await assert.rejects(run); return; }
  await run();
  return { store, patches: () => patches, reads: () => reads, run };
}
let result = await scenario({ config: emptySchedule() });
assert.equal(result.patches(), 0); assert.equal(result.reads(), 0);
result = await scenario({ tier: 'ci_medium' });
assert.equal(result.store.status, 'on_target'); assert.equal(result.patches(), 0);
result = await scenario();
assert.equal(result.patches(), 1); assert.equal(result.store.pendingTier, 'ci_medium');
await result.run(); assert.equal(result.patches(), 1); // sequential backup trigger cannot resize twice
result = await scenario({ state: { pendingTier: 'ci_medium', lastRequestedAt: new Date().toISOString() }, tier: 'ci_medium' });
assert.equal(result.store.pendingTier, null); assert.equal(result.patches(), 0);
result = await scenario({ failure: 'processing addon changes' });
assert.equal(result.store.pendingTier, null); await result.run(); assert.equal(result.patches(), 1);
result = await scenario({ tier: null });
assert.equal(result.store.status, 'read_failed'); assert.equal(result.patches(), 0);
result = await scenario({ tier: 'ci_large' });
assert.equal(result.store.status, 'needs_attention'); assert.equal(result.patches(), 0);
result = await scenario({ state: { pendingTier: 'ci_medium', lastRequestedAt: '2020-01-01T00:00:00Z' } });
assert.equal(result.store.status, 'needs_attention'); assert.equal(result.patches(), 0);
await scenario({ dbError: true });
console.log('autoscale runtime: disabled, target, duplicate trigger, confirmation, 429, unknown tier, pending timeout and database failure passed');
