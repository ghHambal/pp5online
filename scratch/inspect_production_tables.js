import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

const SUPABASE_URL = 'https://zhjqkylesnhcotpkzoxr.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  try {
    const { data: points } = await supabase.from('duty_points').select('id').limit(1)
    const validPointId = points.length > 0 ? points[0].id : 1

    console.log('Testing inserting daily comment row...')
    const testRow1 = {
      id: crypto.randomUUID(),
      date: '2026-07-09',
      point_id: validPointId,
      teacher_id: 'executive_daily_comment',
      status: 'daily_comment',
      time: '00:00',
      distance: 0,
      result: 'Test daily comment'
    }
    const { data: res1, error: err1 } = await supabase.from('reports').insert(testRow1).select()
    if (err1) {
      console.log('Daily comment insert FAILED:', err1.message)
    } else {
      console.log('Daily comment insert SUCCEEDED!', res1)
      await supabase.from('reports').delete().eq('id', res1[0].id)
    }

    console.log('Testing inserting point comment row...')
    const testRow2 = {
      id: crypto.randomUUID(),
      date: '2026-07-09',
      point_id: validPointId,
      teacher_id: 'executive_point_comment',
      status: 'point_comment',
      time: '00:00',
      distance: 0,
      result: 'Test point comment'
    }
    const { data: res2, error: err2 } = await supabase.from('reports').insert(testRow2).select()
    if (err2) {
      console.log('Point comment insert FAILED:', err2.message)
    } else {
      console.log('Point comment insert SUCCEEDED!', res2)
      await supabase.from('reports').delete().eq('id', res2[0].id)
    }
  } catch (err) {
    console.error('Error during test:', err)
  }
}

run()
