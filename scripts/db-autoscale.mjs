#!/usr/bin/env node
// All callers use the same schedule/state/lease in autoscale-tick.
// No independent health-based resize or git-branch state remains.
const ref = process.env.SUPABASE_PROJECT_REF;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!ref || !key) throw new Error('Missing SUPABASE_PROJECT_REF / SUPABASE_SERVICE_ROLE_KEY');
const response = await fetch(`https://${ref}.supabase.co/functions/v1/autoscale-tick`, {
  method: 'POST',
  signal: AbortSignal.timeout(60000),
  headers: {
    apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json',
    ...(process.argv.includes('--test-notify') ? { 'X-Test-Notify': '1' } : {}),
  },
  body: '{}',
});
const result = await response.json();
if (!response.ok || !result.ok) throw new Error(JSON.stringify(result));
console.log(JSON.stringify(result, null, 2));
