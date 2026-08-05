import { supabase } from './supabase.js'

const PW_KEY = 'sports_fund_monitor_pw'
const root = document.getElementById('fund-monitor-root')

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const categoryLabel = cat => ({ school_support: 'เงินสนับสนุนโรงเรียน', prize: 'เงินรางวัล', expense: 'รายจ่าย' }[cat] || cat)

async function fetchSnapshot(password) {
  const { data, error } = await supabase.rpc('get_public_sports_fund_snapshot', { p_password: password })
  if (error) throw error
  return data
}

function renderGate(onSuccess) {
  root.innerHTML = `
    <div class="max-w-sm mx-auto mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">สำหรับผู้บริหาร/ฝ่ายการเงินที่ได้รับสิทธิ์เข้าถึงข้อมูลนี้เท่านั้น</p>
      </div>
      <input id="gate-password" type="password" placeholder="รหัสผ่าน" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-center tracking-widest" autofocus>
      <button id="gate-submit" class="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">เข้าดูข้อมูล</button>
      <p id="gate-error" class="text-xs text-red-500 text-center hidden">รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่</p>
    </div>`
  const input = root.querySelector('#gate-password')
  const errEl = root.querySelector('#gate-error')
  const submit = async () => {
    const pw = input.value.trim()
    if (!pw) return
    root.querySelector('#gate-submit').disabled = true
    try {
      const data = await fetchSnapshot(pw)
      sessionStorage.setItem(PW_KEY, pw)
      onSuccess(data)
    } catch (e) {
      errEl.classList.remove('hidden')
      root.querySelector('#gate-submit').disabled = false
    }
  }
  root.querySelector('#gate-submit').onclick = submit
  input.addEventListener('keydown', e => { if (e.key === 'Enter') submit() })
}

function renderDashboard(snapshot) {
  const colors = snapshot.team_colors || []
  const duesByTeam = snapshot.dues_by_team || {}
  const entries = snapshot.entries || []
  let gender = 'ALL'

  const colorsOf = () => gender === 'ALL' ? colors : colors.filter(c => c.gender === gender)
  const entriesOf = colorId => entries.filter(e => e.team_color_id === colorId)
  const sumOf = (colorId, cat) => entriesOf(colorId).filter(e => e.category === cat).reduce((s, e) => s + Number(e.amount || 0), 0)
  const totalsOf = colorId => {
    const dues = Number(duesByTeam[colorId]) || 0
    const support = sumOf(colorId, 'school_support')
    const prize = sumOf(colorId, 'prize')
    const expense = sumOf(colorId, 'expense')
    return { dues, support, prize, expense, balance: dues + support + prize - expense }
  }

  root.innerHTML = `
    <div class="space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👦 ชาย</button>
          <button type="button" data-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👧 หญิง</button>
          <button type="button" data-gender="ALL" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👥 ทั้งหมด</button>
        </div>
        <button id="btn-export-csv" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">⬇️ ดาวน์โหลด Excel (CSV)</button>
      </div>
      <div id="grand-summary" class="grid grid-cols-2 sm:grid-cols-5 gap-3"></div>
      <div id="color-cards" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"></div>
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="p-3 border-b border-slate-200 bg-slate-50"><b class="text-sm">รายการละเอียดทั้งหมด (เงินสนับสนุน/รางวัล/รายจ่าย)</b></div>
        <div id="entries-table" class="overflow-x-auto"></div>
      </div>
    </div>`

  const render = () => {
    root.querySelectorAll('[data-gender]').forEach(b => { const on = b.dataset.gender === gender; b.classList.toggle('bg-pink-600', on); b.classList.toggle('text-white', on) })
    const cardsOf = colorsOf()

    const grand = cardsOf.reduce((acc, c) => {
      const t = totalsOf(c.id)
      acc.dues += t.dues; acc.support += t.support; acc.prize += t.prize; acc.expense += t.expense; acc.balance += t.balance
      return acc
    }, { dues: 0, support: 0, prize: 0, expense: 0, balance: 0 })

    root.querySelector('#grand-summary').innerHTML = `
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">ค่าบำรุงสีรวม</p><b class="text-lg">${grand.dues.toLocaleString('th-TH')}</b></div>
      <div class="bg-blue-50 rounded-xl border border-blue-200 p-3 text-center"><p class="text-[10px] text-blue-600 font-bold">สนับสนุนโรงเรียน</p><b class="text-lg text-blue-700">${grand.support.toLocaleString('th-TH')}</b></div>
      <div class="bg-amber-50 rounded-xl border border-amber-200 p-3 text-center"><p class="text-[10px] text-amber-600 font-bold">เงินรางวัลรวม</p><b class="text-lg text-amber-700">${grand.prize.toLocaleString('th-TH')}</b></div>
      <div class="bg-red-50 rounded-xl border border-red-200 p-3 text-center"><p class="text-[10px] text-red-600 font-bold">รายจ่ายรวม</p><b class="text-lg text-red-700">${grand.expense.toLocaleString('th-TH')}</b></div>
      <div class="bg-emerald-50 rounded-xl border border-emerald-200 p-3 text-center"><p class="text-[10px] text-emerald-600 font-bold">คงเหลือรวม</p><b class="text-lg text-emerald-700">${grand.balance.toLocaleString('th-TH')}</b></div>`

    root.querySelector('#color-cards').innerHTML = cardsOf.map(c => {
      const t = totalsOf(c.id)
      return `<div class="bg-white rounded-xl border border-slate-200 p-3">
        <div class="flex items-center gap-2 mb-2"><span class="w-3 h-3 rounded-full flex-shrink-0" style="background:${esc(c.hex_color)}"></span><b class="text-sm">สี${esc(c.name)}</b></div>
        <div class="space-y-1 text-xs">
          <div class="flex justify-between"><span class="text-slate-500">ค่าบำรุงสี</span><b>${t.dues.toLocaleString('th-TH')}</b></div>
          <div class="flex justify-between"><span class="text-slate-500">สนับสนุนโรงเรียน</span><b>${t.support.toLocaleString('th-TH')}</b></div>
          <div class="flex justify-between"><span class="text-slate-500">เงินรางวัล</span><b>${t.prize.toLocaleString('th-TH')}</b></div>
          <div class="flex justify-between"><span class="text-red-500">รายจ่าย</span><b class="text-red-600">-${t.expense.toLocaleString('th-TH')}</b></div>
          <div class="flex justify-between pt-1.5 mt-1.5 border-t border-slate-100"><span class="font-bold text-emerald-600">คงเหลือ</span><b class="text-emerald-700">${t.balance.toLocaleString('th-TH')}</b></div>
        </div>
      </div>`
    }).join('') || '<p class="col-span-full text-center text-slate-400 py-8">ไม่มีข้อมูลสี</p>'

    const colorIdsInScope = new Set(cardsOf.map(c => c.id))
    const colorNameOf = id => colors.find(c => c.id === id)?.name || '—'
    const rows = entries.filter(e => colorIdsInScope.has(e.team_color_id)).sort((a, b) => (a.entry_date < b.entry_date ? 1 : -1))
    root.querySelector('#entries-table').innerHTML = rows.length ? `<table class="w-full text-xs">
      <thead><tr class="bg-slate-50 text-slate-500 text-left"><th class="p-2 font-bold">วันที่</th><th class="p-2 font-bold">สี</th><th class="p-2 font-bold">ประเภท</th><th class="p-2 font-bold">รายละเอียด</th><th class="p-2 font-bold text-right">จำนวนเงิน</th><th class="p-2 font-bold">บันทึกโดย</th></tr></thead>
      <tbody>${rows.map(e => `<tr class="border-t border-slate-100">
        <td class="p-2 whitespace-nowrap">${new Date(e.entry_date).toLocaleDateString('th-TH', { day: '2-digit', month: 'short', year: '2-digit' })}</td>
        <td class="p-2 whitespace-nowrap">สี${esc(colorNameOf(e.team_color_id))}</td>
        <td class="p-2 whitespace-nowrap">${esc(categoryLabel(e.category))}</td>
        <td class="p-2">${esc(e.description)}</td>
        <td class="p-2 text-right font-bold ${e.category === 'expense' ? 'text-red-600' : 'text-emerald-600'}">${e.category === 'expense' ? '-' : '+'}${Number(e.amount).toLocaleString('th-TH')}</td>
        <td class="p-2 whitespace-nowrap">${esc(e.recorded_by_name)}</td>
      </tr>`).join('')}</tbody>
    </table>` : '<p class="text-center text-slate-400 py-8 text-sm">ยังไม่มีรายการ</p>'
  }

  root.querySelectorAll('[data-gender]').forEach(b => b.onclick = () => { gender = b.dataset.gender; render() })

  root.querySelector('#btn-export-csv').onclick = () => {
    const q = x => `"${String(x || '').replaceAll('"', '""')}"`
    const colorIdsInScope = new Set(colorsOf().map(c => c.id))
    const colorNameOf = id => colors.find(c => c.id === id)?.name || '—'
    const rows = entries.filter(e => colorIdsInScope.has(e.team_color_id)).sort((a, b) => (a.entry_date < b.entry_date ? 1 : -1))
    const header = ['วันที่', 'สี', 'ประเภท', 'รายละเอียด', 'จำนวนเงิน', 'บันทึกโดย']
    const body = rows.map(e => [e.entry_date, `สี${colorNameOf(e.team_color_id)}`, categoryLabel(e.category), e.description, (e.category === 'expense' ? -1 : 1) * Number(e.amount), e.recorded_by_name].map(q).join(','))
    const csvRows = [header.map(q).join(','), ...body]
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob(['﻿' + csvRows.join('\n')], { type: 'text/csv' }))
    a.download = `บัญชีเงินกีฬาสี-${gender === 'M' ? 'ชาย' : gender === 'W' ? 'หญิง' : 'ทั้งหมด'}.csv`
    a.click(); URL.revokeObjectURL(a.href)
  }

  render()
}

async function init() {
  const cachedPw = sessionStorage.getItem(PW_KEY)
  if (cachedPw) {
    try {
      const data = await fetchSnapshot(cachedPw)
      renderDashboard(data)
      return
    } catch (e) {
      sessionStorage.removeItem(PW_KEY)
    }
  }
  renderGate(renderDashboard)
}

init()
