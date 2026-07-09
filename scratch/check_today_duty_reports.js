import { createClient } from '@supabase/supabase-js'

const WEN_URL      = 'https://zhjqkylesnhcotpkzoxr.supabase.co'
const WEN_ANON_KEY = 'sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n'

const supabase = createClient(WEN_URL, WEN_ANON_KEY)

async function run() {
  const today = '2026-07-09'
  console.log(`Querying reports for date: ${today}`)
  
  try {
    // 1. Get reports
    const { data: reports, error: reportsErr } = await supabase
      .from('reports')
      .select('*')
      .eq('date', today)

    if (reportsErr) {
      console.error('Error fetching reports:', reportsErr.message)
      return
    }

    console.log(`Found ${reports ? reports.length : 0} reports for today.`)
    console.log('Reports details:')
    console.log(JSON.stringify(reports, null, 2))

    // 2. Fetch duty_points to understand what points exist
    const { data: points, error: pointsErr } = await supabase
      .from('duty_points')
      .select('*')

    if (pointsErr) {
      console.error('Error fetching duty points:', pointsErr.message)
    } else {
      console.log('\nDuty Points count:', points.length)
      console.log('Sample duty points:', JSON.stringify(points.slice(0, 5), null, 2))
    }

  } catch (err) {
    console.error('System error:', err)
  }
}

run()
