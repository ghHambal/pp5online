import { supabase } from './supabase.js';
import { showToast } from './ui.js';
import { emptySchedule, validateSchedule, scheduledTier } from '../supabase/functions/autoscale-tick/schedule.js';
import { estimateComputeCost } from './autoscale-cost.js';

const days = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));

export async function renderAutoscaleSettings() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.classList.toggle('bg-indigo-800', el.dataset.nav === 'autoscale-settings');
    el.classList.toggle('text-white', el.dataset.nav === 'autoscale-settings');
    el.classList.toggle('text-indigo-200', el.dataset.nav !== 'autoscale-settings');
  });
  document.getElementById('page-title').textContent = 'ตั้งค่ากำลังเครื่องฐานข้อมูล';
  const content = document.getElementById('main-content');
  content.innerHTML = '<p class="p-6">กำลังโหลดตารางเวลา...</p>';
  let config;
  let state = {};
  let estimateDate = new Date(Date.now() + 7 * 3600000).toISOString().slice(0, 10);
  try {
    const { data, error } = await supabase.from('system_config').select('key,value,updated_at').in('key', ['autoscaleSchedule', 'autoscaleState']);
    if (error) throw error;
    const row = data.find(r => r.key === 'autoscaleSchedule');
    config = row ? validateSchedule(JSON.parse(row.value)) : emptySchedule();
    const status = data.find(r => r.key === 'autoscaleState');
    state = status ? { ...JSON.parse(status.value), updatedAt: status.updated_at } : {};
  } catch (error) {
    content.innerHTML = `<p class="p-6 text-red-600">โหลดไม่สำเร็จ: ${esc(error.message)}</p>`;
    return;
  }
  const draw = () => {
    let targetLabel = 'ยังไม่บันทึก / กรุณาตรวจตารางเวลา';
    try { targetLabel = !config.enabled ? 'คงระดับเดิม' : scheduledTier(config) === 'ci_medium' ? 'Medium' : 'Micro'; } catch {}
    content.innerHTML = `<div class="space-y-5 animate-fade">
      <div class="bg-white border rounded-2xl p-5 shadow-sm">
        <h2 class="font-bold text-lg">🗓️ ตารางปรับกำลังเครื่อง (เวลาไทย)</h2>
        ${state.mode !== 'schedule' ? '<p class="mt-3 text-red-700">ยังไม่พบ backend ตารางเวลารุ่นใหม่ ต้องรัน patch_autoscale_schedule.sql และ deploy autoscale-tick ก่อนเปิดใช้งาน (push หน้าเว็บอย่างเดียวไม่เปลี่ยนระบบเดิม)</p>' : ''}
        <p class="text-sm text-gray-600 mt-2">กำลังเครื่องใช้ร่วมกันทั้งโรงเรียน ในช่วงที่กำหนดใช้ Medium นอกช่วงใช้ Micro ไม่ปรับตาม health check อีก</p>
        <p class="text-sm text-gray-600 mt-2">ปิดใช้งาน = หยุดสั่งปรับเครื่องและคงระดับเดิม ไม่ใช่ปิดฐานข้อมูล การปรับอาจใช้เวลาหลายนาทีและทำให้การบันทึกสะดุด ควรเผื่อเวลาก่อนเริ่ม/หลังเลิกงาน</p>
        <p class="mt-3 font-semibold">สถานะตารางที่แสดง: ${config.enabled ? '🟢 เปิดใช้งาน' : '⚪ ปิดใช้งาน'} · เป้าหมายตามเวลาตอนนี้: ${targetLabel}</p>
        <p class="text-xs text-gray-500 mt-2">ระดับที่ระบบตรวจพบล่าสุด: ${esc(state.currentTier || 'ยังไม่มีข้อมูลใหม่')} · ตรวจล่าสุด: ${state.updatedAt ? esc(new Date(state.updatedAt).toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' })) : '—'}</p>
        <p class="text-xs text-gray-500 mt-1">${esc(state.lastAction || 'ยังไม่มีการปรับ')} ${state.lastError ? '· ' + esc(state.lastError) : ''}</p>
        <p class="text-xs text-gray-500 mt-1">สถานะงาน: ${esc(state.status || '—')} · คำสั่งที่รอยืนยัน: ${esc(state.pendingTier || 'ไม่มี')} · เว้นคำสั่งถึง: ${state.nextResizeAllowedAt ? esc(new Date(state.nextResizeAllowedAt).toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' })) : '—'}</p>
        <div class="flex gap-3 mt-4"><button id="as-enable" class="bg-green-700 text-white rounded-xl px-4 py-2">เปิดใช้งาน</button><button id="as-disable" class="bg-gray-700 text-white rounded-xl px-4 py-2">ปิดใช้งาน</button><button id="as-refresh" class="border rounded-xl px-4 py-2">รีเฟรชสถานะ</button></div>
      </div>
      <div class="bg-white border rounded-2xl p-5 shadow-sm">
        <h2 class="font-bold">💰 ประมาณค่า Compute ตามตารางเมื่อเปิดใช้งาน</h2>
        <label class="block text-sm mt-3">วันที่อ้างอิง <input id="as-cost-date" type="date" value="${estimateDate}" class="border rounded-lg p-2"></label>
        <div id="as-cost-tags" class="flex flex-wrap gap-3 mt-4"></div>
        <p class="text-xs text-gray-500 mt-3">รายวัน = วันที่เลือก · รายสัปดาห์ = จันทร์–อาทิตย์ของวันที่เลือก · รายเดือน = เดือนปฏิทินของวันที่เลือก คำนวณช่วงซ้อนกันครั้งเดียว</p>
        <p class="text-xs text-gray-500 mt-2">Micro $0.01344/ชั่วโมง · Medium $0.0822/ชั่วโมง (USD ตรวจราคา 13 ก.ย. 2026) ก่อนหักเครดิต ไม่รวมแพ็กเกจ ภาษี ดิสก์ และค่าใช้งานอื่น เป็นประมาณตามตาราง ไม่ใช่ยอดบิลจริง และไม่รวมความคลาดเคลื่อนจากรอบตรวจ/ระยะปรับเครื่อง <a class="underline" href="https://supabase.com/docs/guides/platform/compute-and-disk" target="_blank" rel="noopener noreferrer">ราคาจาก Supabase</a></p>
      </div>
      <form id="as-form" class="space-y-4">
        <div id="as-periods" class="space-y-4">${config.periods.map((period, index) => `<section class="bg-white border rounded-2xl p-5 shadow-sm" data-period="${index}">
          <div class="flex flex-wrap gap-3 items-end"><label>วันที่เริ่ม<input required type="date" name="startDate" value="${esc(period.startDate)}" class="block border rounded-lg p-2"></label><label>วันที่สิ้นสุด<input required type="date" name="endDate" value="${esc(period.endDate)}" class="block border rounded-lg p-2"></label><button type="button" data-remove="${index}" class="text-red-600 border rounded-lg p-2">ลบช่วงนี้</button></div>
          <div class="mt-4 space-y-2">${period.days.map((day, d) => `<div class="flex flex-wrap gap-3 items-center" data-day="${d}" data-enabled="${day.enabled}"><span class="w-20">${days[d]}</span><button type="button" data-day-action class="border rounded-lg px-3 py-2">${day.enabled ? 'ใช้งาน · ปิดวัน' : 'ไม่ใช้งาน · เปิดวัน'}</button><input aria-label="เวลาเริ่ม${days[d]}" type="time" required name="start" value="${esc(day.start)}" class="border rounded-lg p-2"><span>ถึง</span><input aria-label="เวลาสิ้นสุด${days[d]}" type="time" required name="end" value="${esc(day.end)}" class="border rounded-lg p-2"></div>`).join('')}</div>
        </section>`).join('')}</div>
        <p class="text-sm text-gray-500">เพิ่มได้หลายช่วงวันที่ ช่วงซ้อนกันจะใช้ Medium หากตรงกับช่วงใดช่วงหนึ่ง เวลาต้องเริ่มและสิ้นสุดภายในวันเดียวกัน</p>
        <div class="flex gap-3"><button type="button" id="as-add" class="border bg-white rounded-xl px-4 py-2">＋ เพิ่มช่วงวันที่</button><button type="submit" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกตารางเวลา</button></div>
        <p class="text-xs text-gray-500">การตั้งค่าจะมีผลในรอบตรวจถัดไป (ปกติทุก 5 นาที) ไม่สั่งปรับเครื่องจากหน้านี้โดยตรง</p>
      </form>
    </div>`;
    const collect = () => ({ schemaVersion: 1, enabled: config.enabled, periods: [...content.querySelectorAll('[data-period]')].map(section => ({ startDate: section.querySelector('[name=startDate]').value, endDate: section.querySelector('[name=endDate]').value, days: [...section.querySelectorAll('[data-day]')].map(row => ({ enabled: row.dataset.enabled === 'true', start: row.querySelector('[name=start]').value, end: row.querySelector('[name=end]').value })) })) });
    const updateCosts = () => {
      try {
        const costs = estimateComputeCost(collect(), estimateDate);
        content.querySelector('#as-cost-tags').innerHTML = [['day', 'รายวัน'], ['week', 'รายสัปดาห์'], ['month', 'รายเดือน']].map(([key, label]) => `<span class="border bg-indigo-50 text-indigo-900 rounded-xl px-4 py-3"><span class="block text-xs">${label} (${costs[key].days} วัน)</span><strong>$${costs[key].usd.toFixed(2)}</strong><span class="block text-xs">Medium ${costs[key].mediumHours.toFixed(1)} ชั่วโมง</span></span>`).join('');
      } catch { content.querySelector('#as-cost-tags').textContent = 'กรุณากรอกวันที่และเวลาให้ครบเพื่อคำนวณ'; }
    };
    content.querySelector('#as-cost-date').onchange = event => { estimateDate = event.target.value; updateCosts(); };
    content.querySelector('#as-form').addEventListener('input', updateCosts);
    updateCosts();
    const persist = async enabled => {
      try {
        let next = collect();
        if (enabled === false) {
          const { data, error } = await supabase.from('system_config').select('value').eq('key', 'autoscaleSchedule').maybeSingle();
          if (error) throw error;
          next = data ? validateSchedule(JSON.parse(data.value)) : emptySchedule();
        }
        if (enabled !== undefined) next.enabled = enabled;
        if (next.enabled && state.mode !== 'schedule') throw new Error('กรุณาติดตั้ง SQL และ Edge Function รุ่นใหม่ก่อนเปิดใช้งาน');
        validateSchedule(next);
        content.querySelectorAll('button').forEach(b => b.disabled = true);
        const { error } = await supabase.from('system_config').upsert({ key: 'autoscaleSchedule', value: JSON.stringify(next), updated_at: new Date().toISOString() }, { onConflict: 'key' });
        if (error) throw error;
        config = next;
        draw();
        showToast('บันทึกแล้ว มีผลในรอบตรวจถัดไป', 'success');
      } catch (error) { showToast(esc(error.message), 'error'); content.querySelectorAll('button').forEach(b => b.disabled = false); }
    };
    content.querySelector('#as-form').onsubmit = event => { event.preventDefault(); persist(); };
    content.querySelector('#as-enable').onclick = () => persist(true);
    content.querySelector('#as-disable').onclick = () => persist(false);
    content.querySelector('#as-refresh').onclick = () => { if (confirm('รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?')) renderAutoscaleSettings(); };
    content.querySelector('#as-add').onclick = () => {
      config = collect();
      if (config.periods.length >= 30) { showToast('เพิ่มได้ไม่เกิน 30 ช่วง', 'warning'); return; }
      const today = new Date(Date.now() + 7 * 3600000).toISOString().slice(0, 10);
      config.periods.push({ startDate: today, endDate: today, days: days.map(() => ({ enabled: true, start: '07:00', end: '19:00' })) });
      draw();
    };
    content.querySelectorAll('[data-remove]').forEach(button => button.onclick = () => { config = collect(); config.periods.splice(Number(button.dataset.remove), 1); draw(); });
    content.querySelectorAll('[data-day-action]').forEach(button => button.onclick = () => { const row = button.closest('[data-day]'); row.dataset.enabled = row.dataset.enabled === 'true' ? 'false' : 'true'; button.textContent = row.dataset.enabled === 'true' ? 'ใช้งาน · ปิดวัน' : 'ไม่ใช้งาน · เปิดวัน'; updateCosts(); });
  };
  draw();
}
