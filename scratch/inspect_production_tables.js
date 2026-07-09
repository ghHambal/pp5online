import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

const SUPABASE_URL = 'https://zhjqkylesnhcotpkzoxr.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_3vZV2TYujjhEmQcpdSk_1A_-B3AJK0n'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function run() {
  try {
    console.log('Testing inserting report with point_id = null...')
    const testRow1 = {
      id: crypto.randomUUID(),
      date: '2026-07-09',
      point_id: null,
      teacher_id: 'admin',
      status: 'daily_comment',
      result: 'Test daily comment'
    }
    const { data: res1, error: err1 } = await supabase.from('reports').insert(testRow1).select()
    if (err1) {
      console.log('Insert with point_id = null FAILED:', err1.message)
    } else {
      console.log('Insert with point_id = null SUCCEEDED!', res1)
      // Delete the test row
      await supabase.from('reports').delete().eq('id', res1[0].id)
    }

    console.log('Testing inserting report with point_id = 1 (valid point)...')
    // Let's find a valid point id first
    const { data: points } = await supabase.from('duty_points').select('id').limit(1)
    const validPointId = points.length > 0 ? points[0].id : 1

    const testRow2 = {
      id: crypto.randomUUID(),
      date: '2026-07-09',
      point_id: validPointId,
      teacher_id: 'admin',
      status: 'comment_only',
      result: 'Test point comment'
    }
    const { data: res2, error: err2 } = await supabase.from('reports').insert(testRow2).select()
    if (err2) {
      console.log('Insert with point_id = valid_id FAILED:', err2.message)
    } else {
      console.log('Insert with point_id = valid_id SUCCEEDED!', res2)
      // Delete the test row
      await supabase.from('reports').delete().eq('id', res2[0].id)
    }
  } catch (err) {
    console.error('Error during test:', err)
  }
}

run()
