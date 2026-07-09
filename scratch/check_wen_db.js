import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://tfpginvtochpbacqnpkv.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_r07KOCo2bLaBhyZzUGJ6nw_mHgT0Hgd'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  try {
    const { count, error } = await supabase.from('reports').select('*', { count: 'exact', head: true })
    if (error) {
      console.log('Error counting reports:', error.message)
    } else {
      console.log('Reports count:', count)
    }

    const { data: latest, error: err2 } = await supabase.from('reports').select('*').order('date', { ascending: false }).limit(5)
    if (err2) {
      console.log('Error getting latest reports:', err2.message)
    } else {
      console.log('Latest reports:', latest)
    }
  } catch (err) {
    console.error('Error:', err)
  }
}

run()
