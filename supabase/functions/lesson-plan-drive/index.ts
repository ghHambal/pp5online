import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "npm:@supabase/supabase-js@2.95.3"
import { createLessonPlanDriveHandler } from "./handler.js"

Deno.serve(createLessonPlanDriveHandler({
  createClient,
  fetchImpl: fetch,
  env: {
    url: Deno.env.get("SUPABASE_URL")!,
    anonKey: Deno.env.get("SUPABASE_ANON_KEY")!,
    serviceKey: Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  },
}))
