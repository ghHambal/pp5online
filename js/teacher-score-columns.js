import { getScoreColumns, getSystemConfig, getLifeSkillColumns,
         createScoreColumn, updateScoreColumn, deleteScoreColumn } from './api.js'
import { showToast } from './ui.js'

const SELECT_CLS = 'input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400'
const INPUT_CLS  = 'input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm'

function setContent(html) {
  document.getElementById('main-content').innerHTML = html
}

function setTitle(t) {
  document.getElementById('page-title').textContent = t
}

function setActiveNav(nav) {
  document.querySelectorAll('[data-nav]').forEach(el => {
    const active = el.dataset.nav === nav
    el.classList.toggle('bg-emerald-800', active)
    el.classList.toggle('text-white', active)
    el.classList.toggle('text-emerald-200', !active)
  })
}

const SCORE_TYPES = ['ระหว่างเรียน','กลางภาค','ปลายภาค','คะแนนพิเศษ']

const TYPE_COLOR  = {
  'ระหว่างเรียน': 'bg-blue-50 text-blue-700',
  'กลางภาค':      'bg-amber-50 text-amber-700',
  'ปลายภาค':      'bg-red-50 text-red-700',
  'คะแนนพิเศษ':   'bg-purple-50 text-purple-700',
}

const RELIGION_LOCKED_SCORE_COLUMNS = ['คะแนนมาเรียน', 'คะแนนละหมาด']

export async function renderScoreColumns(teacher, classId, className, classData = null) {
  setActiveNav('my-classes')
  setTitle(`คอลัมน์คะแนน — ${className}`)
  const isLifeSkill = (classData?.skill_group ?? classData?.master_subjects?.skill_group ?? '') === 'ชีวิต'
  const isReligion = ['AGM', 'AGMVOC'].includes(classData?.master_subjects?.subject_group)
  let lockedScoreColumnIds = new Set()
  const _reload = async () => {
    const cols = await getScoreColumns(classId)
    const cfg = await getSystemConfig().catch(()=>({}))
    const year = parseInt(cfg.academicYear ?? 2568)
    const sem = parseInt(cfg.semester ?? 1)
    const lockedNames = isLifeSkill
      ? (await getLifeSkillColumns(year, sem, 'สามัญ').catch(()=>[])).slice(0, 3).map(c => c.name)
      : isReligion ? RELIGION_LOCKED_SCORE_COLUMNS : []
    lockedScoreColumnIds = new Set(cols.filter(c => lockedNames.includes(c.assignment_name)).map(c => c.id))
    window._scoreColCache = Object.fromEntries(cols.map(c => [c.id, c]))
    const grouped = SCORE_TYPES.map(t => ({ type: t, items: cols.filter(c => c.assignment_type === t) }))
    const totalScore = cols.reduce((sum, c) => sum + (Number(c.max_score) || 0), 0)
    document.getElementById('sc-content').innerHTML = `
      <!-- สรุปคะแนนรวม -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4 flex items-center justify-between">
        <div>
          <p class="text-xs text-gray-400">คะแนนรวมทุกหมวด</p>
          <p class="text-2xl font-bold text-indigo-700">${totalScore} คะแนน</p>
        </div>
        <div class="text-xs text-gray-400 text-right">
          <p>${cols.length} คอลัมน์</p>
          <p class="mt-1">กลางภาค: ${cols.filter(c=>c.assignment_type==='กลางภาค').reduce((s,c)=>s+(Number(c.max_score)||0),0)} |
             ปลายภาค: ${cols.filter(c=>c.assignment_type==='ปลายภาค').reduce((s,c)=>s+(Number(c.max_score)||0),0)}</p>
        </div>
      </div>
      <!-- ตารางแยกตามหมวด -->
      ${grouped.map(g => `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${TYPE_COLOR[g.type]??''}">${g.type}</span>
            <span class="text-xs text-gray-400">รวม ${g.items.reduce((s,c)=>s+(Number(c.max_score)||0),0)} คะแนน</span>
          </div>
          <button onclick="window._addScoreCol('${g.type}')"
            class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${!g.items.length
          ? `<p class="text-center py-6 text-gray-300 text-sm">ยังไม่มีคอลัมน์ — กด "＋ เพิ่ม"</p>`
          : `<table class="w-full text-sm">
              <thead class="bg-gray-50 text-xs text-gray-400 uppercase">
                <tr>
                  <th class="px-4 py-2 text-left">ชื่อรายการ</th>
                  <th class="px-4 py-2 text-center">คอลัมน์ Sheet</th>
                  <th class="px-4 py-2 text-center">คะแนนเต็ม</th>
                  <th class="px-4 py-2 text-right">จัดการ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${g.items.map(c => {
                  const locked = lockedScoreColumnIds.has(c.id)
                  return `
                <tr class="${locked ? 'bg-emerald-50/35' : 'hover:bg-gray-50'}">
                  <td class="px-4 py-2.5 font-medium text-gray-800">${c.assignment_name}</td>
                  <td class="px-4 py-2.5 text-center font-mono text-indigo-600 text-xs">${c.sheet_column}</td>
                  <td class="px-4 py-2.5 text-center text-gray-600">${c.max_score??'—'}</td>
                  <td class="px-4 py-2.5 text-right">
                    ${locked
                      ? `<span class="text-xs text-emerald-700 font-medium">ระบบล็อก</span>`
                      : `<button onclick="window._editScoreCol(${c.id})"
                          class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
                        <button onclick="window._deleteScoreCol(${c.id})"
                          class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`}
                  </td>
                </tr>`}).join('')}
              </tbody>
            </table>`}
      </div>`).join('')}
      <!-- Form เพิ่ม/แก้ไข -->
      <div id="sc-form-wrap" class="hidden bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h4 id="sc-form-title" class="font-semibold text-gray-700 mb-4">เพิ่มคอลัมน์คะแนน</h4>
        <form id="sc-form" class="grid grid-cols-2 gap-3">
          <input type="hidden" id="sc-edit-id" />
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อรายการ <span class="text-red-400">*</span></label>
            <input id="sc-name" type="text" placeholder="เช่น คะแนนเก็บ 1"
              class="${INPUT_CLS}" />
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">หมวด <span class="text-red-400">*</span></label>
            <select id="sc-type" class="${SELECT_CLS}">
              ${SCORE_TYPES.map(t=>`<option value="${t}">${t}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">คอลัมน์ใน Sheet <span class="text-red-400">*</span>
              <span class="text-gray-400 font-normal ml-1">(เช่น EK, EX, A)</span>
            </label>
            <input id="sc-col" type="text" placeholder="EK"
              class="${INPUT_CLS} font-mono uppercase" maxlength="4" />
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">คะแนนเต็ม</label>
            <input id="sc-max" type="number" min="1" max="100" placeholder="20"
              class="${INPUT_CLS}" />
          </div>
          <div class="col-span-2 flex gap-3 pt-1">
            <button type="button" onclick="document.getElementById('sc-form-wrap').classList.add('hidden')"
              class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
              ยกเลิก
            </button>
            <button id="sc-save" type="submit"
              class="btn-primary flex-1 py-2 rounded-xl text-white text-sm font-semibold">
              บันทึก
            </button>
          </div>
        </form>
      </div>`

    // ─── bind CRUD actions ──────────────────────────────────────────────────
    window._addScoreCol = (type) => {
      document.getElementById('sc-edit-id').value = ''
      document.getElementById('sc-name').value    = ''
      document.getElementById('sc-col').value     = ''
      document.getElementById('sc-max').value     = ''
      document.getElementById('sc-type').value    = type
      document.getElementById('sc-form-title').textContent = `เพิ่มคอลัมน์ — ${type}`
      document.getElementById('sc-form-wrap').classList.remove('hidden')
      document.getElementById('sc-name').focus()
    }
    window._editScoreCol = (id) => {
      const c = window._scoreColCache?.[id]
      if (!c) return
      if (lockedScoreColumnIds.has(id)) {
        showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้ไขได้', 'warning')
        return
      }
      document.getElementById('sc-edit-id').value = id
      document.getElementById('sc-name').value    = c.assignment_name
      document.getElementById('sc-col').value     = c.sheet_column
      document.getElementById('sc-max').value     = c.max_score ?? ''
      document.getElementById('sc-type').value    = c.assignment_type
      document.getElementById('sc-form-title').textContent = 'แก้ไขคอลัมน์'
      document.getElementById('sc-form-wrap').classList.remove('hidden')
    }
    window._deleteScoreCol = async (id) => {
      if (lockedScoreColumnIds.has(id)) {
        showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถลบได้', 'warning')
        return
      }
      if (!confirm('ยืนยันลบคอลัมน์นี้?')) return
      try {
        await deleteScoreColumn(id)
        showToast('ลบแล้ว', 'success')
        await _reload()
      } catch (err) { showToast('ลบไม่สำเร็จ', 'error') }
    }
    document.getElementById('sc-form')?.addEventListener('submit', async e => {
      e.preventDefault()
      const btn  = document.getElementById('sc-save')
      const id   = document.getElementById('sc-edit-id').value
      const name = document.getElementById('sc-name').value.trim()
      const col  = document.getElementById('sc-col').value.trim().toUpperCase()
      const type = document.getElementById('sc-type').value
      const max  = parseInt(document.getElementById('sc-max').value) || null
      if (!name || !col) { showToast('กรุณากรอกชื่อและคอลัมน์ Sheet', 'warning'); return }
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        const payload = { assignment_name: name, assignment_type: type, sheet_column: col, max_score: max }
        if (id) await updateScoreColumn(Number(id), payload)
        else    await createScoreColumn({ ...payload, class_id: classId })
        showToast('บันทึกสำเร็จ', 'success')
        document.getElementById('sc-form-wrap').classList.add('hidden')
        await _reload()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: '+(err.message??''), 'error')
      } finally {
        btn.disabled = false; btn.textContent = 'บันทึก'
      }
    })
  }
  setContent(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-5 flex-wrap">
      <button onclick="window._navTo?.('my-classes') || history.back()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <div class="flex-1 min-w-0">
        <h2 class="text-lg font-bold text-gray-800">คอลัมน์คะแนน</h2>
        <p class="text-xs text-gray-400">${className} — ระบุตำแหน่งคอลัมน์ใน Google Sheet</p>
      </div>
      ${isLifeSkill ? `
      <button id="btn-fill-lifeskill"
        class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition flex-shrink-0">
        🌱 เติมคะแนนทักษะชีวิต
      </button>` : ''}
    </div>
    <div id="sc-content"><div class="flex justify-center py-8 text-gray-400">
      <svg class="animate-spin h-5 w-5 mr-2 text-amber-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div></div>
  </div>`)
  await _reload()

  // ─── Auto-fill คอลัมน์ทักษะชีวิต (เฉพาะห้อง skill_group = 'ชีวิต') ─────────
  document.getElementById('btn-fill-lifeskill')?.addEventListener('click', async () => {
    const btn = document.getElementById('btn-fill-lifeskill')
    btn.disabled = true; btn.textContent = '⏳ กำลังเติม...'
    try {
      const cfg  = await getSystemConfig().catch(()=>({}))
      const year = parseInt(cfg.academicYear ?? 2568)
      const sem  = parseInt(cfg.semester ?? 1)
      const lsCols = await getLifeSkillColumns(year, sem, 'สามัญ').catch(()=>[])
      if (!lsCols.length) { showToast('ยังไม่มีหัวข้อทักษะชีวิต — ให้แอดมินเพิ่มก่อน', 'warning'); return }

      // ตรวจว่ามีคอลัมน์กลางภาคอยู่แล้วไหม (ไม่ duplicate)
      const existing = await getScoreColumns(classId)
      const existingNames = new Set(existing.filter(c => c.assignment_type === 'กลางภาค').map(c => c.assignment_name))

      let added = 0
      for (const col of lsCols) {
        if (existingNames.has(col.name)) continue
        await createScoreColumn({
          class_id:        classId,
          assignment_name: col.name,
          assignment_type: 'กลางภาค',
          sheet_column:    col.sheet_col ?? '',
          max_score:       col.max_score ?? 20,
        })
        added++
      }
      showToast(added > 0 ? `เพิ่ม ${added} คอลัมน์สำเร็จ ✅` : 'มีคอลัมน์ทักษะชีวิตอยู่แล้ว', added > 0 ? 'success' : 'info')
      await _reload()
    } catch (err) {
      showToast('เติมไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    } finally {
      const b = document.getElementById('btn-fill-lifeskill')
      if (b) { b.disabled = false; b.textContent = '🌱 เติมคะแนนทักษะชีวิต' }
    }
  })

}

// ─── Class Edit Form ──────────────────────────────────────────────────────────
