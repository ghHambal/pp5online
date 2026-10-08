import { supabase } from './supabase.js';
import { showToast } from './ui.js';
import { emptySchedule, scheduleSegmentsForDate, scheduledTier, tierLabel, validateSchedule } from '../supabase/functions/autoscale-tick/schedule.js';
import { normalizeGuardrail } from '../supabase/functions/autoscale-tick/guardrail.js';
import { COMPUTE_PRICES, estimateComputeCost } from './autoscale-cost.js';
import { WORKLOAD_FEATURES, saveWorkloadConfig } from './workload-scheduler.js';
import { defaultWorkloadConfig, normalizeWorkloadConfig, workloadState } from './workload-schedule.js';

const days = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const tierOptions = [['ci_micro', 'Micro'], ['ci_small', 'Small'], ['ci_medium', 'Medium']];
const tierClasses = { ci_micro: 'border-slate-300 bg-slate-50 text-slate-700', ci_small: 'border-emerald-300 bg-emerald-50 text-emerald-800', ci_medium: 'border-rose-300 bg-rose-50 text-rose-800' };
const workloadDays = days;
const workloadTabs = [
  { key: 'prayer', label: '🙏 ละหมาด', description: 'ควบคุมช่วง polling และจอแสดงผลการเช็คชื่อละหมาด', features: ['prayer_monitor'] },
  { key: 'leave', label: '🚪 ออกนอกห้องเรียน', description: 'ควบคุมจอติดตามนักเรียนออกนอกห้องเรียน', features: ['leave_monitor'] },
  { key: 'sports', label: '🏅 กีฬาสี', description: 'ควบคุมจอสด scoreboard และคิว live ของกีฬาสี', features: ['azizgames', 'azfutsal'] },
];

const todayBangkok = () => new Date(Date.now() + 7 * 3600000).toISOString().slice(0, 10);
const dayButtonClass = selected => `border rounded-lg px-3 py-1.5 text-xs transition ${selected ? 'bg-indigo-700 border-indigo-700 text-white' : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'}`;
const tierSelect = selected => tierOptions.map(([value, label]) => `<option value="${value}" ${selected === value ? 'selected' : ''}>${label}</option>`).join('');
const newRule = () => ({ id: `rule-${Date.now()}-${Math.random().toString(16).slice(2)}`, startDate: todayBangkok(), endDate: todayBangkok(), days: [1, 2, 3, 4, 5], start: '07:45', end: '16:30', targetTier: 'ci_medium', label: 'ช่วงใช้งานหลัก' });

const renderWorkloadFeature = (key, workloadConfig) => {
  const meta = WORKLOAD_FEATURES[key];
  const feature = workloadConfig.features[key];
  const currentState = workloadState(key, new Date(), workloadConfig);
  const next = currentState.nextTransitionAt ? new Date(currentState.nextTransitionAt).toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' }) : '—';
  return `<section class="border rounded-2xl p-4" data-workload-feature="${key}">
    <div class="flex flex-wrap justify-between gap-3"><div><h3 class="font-bold">${meta.label}</h3><p class="text-xs text-gray-500">${meta.description}</p></div><div class="text-right text-xs"><div class="font-bold">${currentState.status}</div><div class="text-gray-500">เปลี่ยนถัดไป: ${esc(next)}</div></div></div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Mode<select name="mode" class="block border rounded-lg p-2 w-full mt-1"><option ${feature.mode === 'AUTO' ? 'selected' : ''}>AUTO</option><option ${feature.mode === 'ON' ? 'selected' : ''}>ON</option><option ${feature.mode === 'OFF' ? 'selected' : ''}>OFF</option></select></label>
      ${meta.dateRange ? `<label class="text-sm">วันที่เริ่ม<input name="dateFrom" type="date" value="${esc(feature.dateFrom || '')}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input name="dateTo" type="date" value="${esc(feature.dateTo || '')}" class="block border rounded-lg p-2 w-full mt-1"></label>` : '<span></span><span></span>'}
      <div class="grid grid-cols-2 gap-2"><label class="text-sm">เริ่ม<input name="start" type="time" value="${esc(feature.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">สิ้นสุด<input name="end" type="time" value="${esc(feature.end)}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-3"><label class="text-sm">Buffer ก่อน (นาที)<input name="bufferBefore" type="number" min="0" max="1440" value="${feature.bufferBefore}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Buffer หลัง (นาที)<input name="bufferAfter" type="number" min="0" max="1440" value="${feature.bufferAfter}" class="block border rounded-lg p-2 w-full mt-1"></label></div>
    <div class="flex flex-wrap gap-2 mt-3">${feature.days.map((enabled, day) => `<label class="inline-flex items-center gap-1 text-xs border rounded-lg px-2 py-1"><input type="checkbox" name="day-${day}" ${enabled ? 'checked' : ''}>${workloadDays[day]}</label>`).join('')}</div>
  </section>`;
};

const renderTimeline = config => {
  try {
    const segments = scheduleSegmentsForDate(config, todayBangkok());
    return `<div class="flex h-9 overflow-hidden rounded-lg border bg-gray-100">${segments.map(segment => {
      const width = Math.max(1, ((segment.end - segment.start) / 1440) * 100);
      const start = `${String(Math.floor(segment.start / 60)).padStart(2, '0')}:${String(segment.start % 60).padStart(2, '0')}`;
      const end = `${String(Math.floor(segment.end / 60)).padStart(2, '0')}:${String(segment.end % 60).padStart(2, '0')}`;
      return `<div class="${tierClasses[segment.targetTier]} border-r flex items-center justify-center text-[10px] font-bold overflow-hidden" style="width:${width}%" title="${tierLabel(segment.targetTier)} ${start}–${end}">${width > 8 ? `${tierLabel(segment.targetTier)} ${start}–${end}` : ''}</div>`;
    }).join('')}</div>`;
  } catch {
    return '<div class="rounded-lg border border-amber-300 bg-amber-50 p-3 text-xs text-amber-800">กรอกช่วงเวลาให้ครบเพื่อดูตัวอย่าง Timeline</div>';
  }
};

const renderRule = (rule, index) => `<section class="bg-white border rounded-2xl p-4 shadow-sm" data-rule="${index}" data-rule-id="${esc(rule.id)}">
  <div class="flex flex-wrap gap-3 items-end justify-between">
    <div class="flex flex-wrap gap-3 items-end"><label class="text-sm">วันที่เริ่ม<input required type="date" name="startDate" value="${esc(rule.startDate)}" class="block border rounded-lg p-2 mt-1"></label><label class="text-sm">วันที่สิ้นสุด<input required type="date" name="endDate" value="${esc(rule.endDate)}" class="block border rounded-lg p-2 mt-1"></label></div>
    <div class="flex gap-2"><button type="button" data-duplicate-rule class="border rounded-lg px-3 py-2 text-sm">ทำสำเนา</button><button type="button" data-remove-rule class="border rounded-lg px-3 py-2 text-sm text-red-700">ลบช่วงนี้</button></div>
  </div>
  <div class="mt-3 flex flex-wrap gap-2 items-center"><span class="text-sm font-medium mr-1">วันที่ใช้:</span>${days.map((day, dayIndex) => `<button type="button" data-day-toggle="${dayIndex}" data-selected="${rule.days.includes(dayIndex)}" class="${dayButtonClass(rule.days.includes(dayIndex))}">${day.slice(0, 3)}</button>`).join('')}<button type="button" data-day-preset="weekdays" class="text-xs underline text-indigo-700 ml-2">จ–ศ</button><button type="button" data-day-preset="all" class="text-xs underline text-indigo-700">ทุกวัน</button></div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">เวลาเริ่ม<input required type="time" name="start" value="${esc(rule.start)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">เวลาสิ้นสุด<input required type="time" name="end" value="${esc(rule.end)}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">ระดับเครื่อง<select name="targetTier" class="block border rounded-lg p-2 w-full mt-1">${tierSelect(rule.targetTier)}</select></label><label class="text-sm">หมายเหตุ<input name="label" value="${esc(rule.label)}" maxlength="80" placeholder="เช่น ช่วงเรียน / ช่วงกลางคืน" class="block border rounded-lg p-2 w-full mt-1"></label></div>
</section>`;

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
  let workloadConfig;
  let state = {};
  let estimateDate = todayBangkok();
  let activeTab = 'overview';
  try {
    const { data, error } = await supabase.from('system_config').select('key,value,updated_at').in('key', ['autoscaleSchedule', 'autoscaleState', 'workloadSchedule']);
    if (error) throw error;
    const row = data.find(r => r.key === 'autoscaleSchedule');
    const rawConfig = row?.value ? JSON.parse(row.value) : emptySchedule();
    config = { ...validateSchedule(rawConfig), guardrail: normalizeGuardrail(rawConfig.guardrail) };
    const status = data.find(r => r.key === 'autoscaleState');
    state = status ? { ...JSON.parse(status.value), updatedAt: status.updated_at } : {};
    const workloadRow = data.find(r => r.key === 'workloadSchedule');
    workloadConfig = normalizeWorkloadConfig(workloadRow?.value ? JSON.parse(workloadRow.value) : defaultWorkloadConfig());
  } catch (error) {
    content.innerHTML = `<p class="p-6 text-red-600">โหลดไม่สำเร็จ: ${esc(error.message)}</p>`;
    return;
  }

  const collect = () => ({
    schemaVersion: 2,
    enabled: config.enabled,
    timezone: 'Asia/Bangkok',
    defaultTier: content.querySelector('[name=defaultTier]')?.value || config.defaultTier,
    guardrail: {
      minimumMediumHoldMinutes: Number(content.querySelector('[name=minimumMediumHoldMinutes]')?.value || config.guardrail.minimumMediumHoldMinutes),
      minimumSmallHoldMinutes: Number(content.querySelector('[name=minimumSmallHoldMinutes]')?.value || config.guardrail.minimumSmallHoldMinutes),
      healthyStreakRequired: Number(content.querySelector('[name=healthyStreakRequired]')?.value || config.guardrail.healthyStreakRequired),
      recoveryLockMinutes: Number(content.querySelector('[name=recoveryLockMinutes]')?.value || config.guardrail.recoveryLockMinutes),
    },
    rules: [...content.querySelectorAll('[data-rule]')].map((section, index) => ({
      id: section.dataset.ruleId || `rule-${index + 1}`,
      startDate: section.querySelector('[name=startDate]').value,
      endDate: section.querySelector('[name=endDate]').value,
      days: [...section.querySelectorAll('[data-day-toggle][data-selected="true"]')].map(button => Number(button.dataset.dayToggle)),
      start: section.querySelector('[name=start]').value,
      end: section.querySelector('[name=end]').value,
      targetTier: section.querySelector('[name=targetTier]').value,
      label: section.querySelector('[name=label]').value,
    })),
  });

  const draw = () => {
    let targetTier = null;
    try { targetTier = config.enabled ? scheduledTier(config) : null; } catch {}
    const targetLabel = targetTier ? tierLabel(targetTier) : config.enabled ? 'กรุณาตรวจตารางเวลา' : 'คงระดับเดิม';
    const backendSupportsMultiTier = Number(state.scheduleSchemaVersion) >= 2;
    const tierSummary = tierOptions.map(([tier, label]) => `<span class="inline-flex items-center gap-2 border rounded-xl px-3 py-2 ${tierClasses[tier]}"><span class="font-bold">${label}</span><span>$${COMPUTE_PRICES[tier].toFixed(5)}/ชม.</span></span>`).join('');
    content.innerHTML = `<div class="space-y-5 animate-fade">
      <div role="tablist" aria-label="กลุ่มการตั้งค่ากำลังเครื่อง" class="bg-white border rounded-2xl p-2 shadow-sm flex flex-wrap gap-2"><button type="button" role="tab" data-autoscale-tab="overview" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">📊 ภาพรวม</button><button type="button" role="tab" data-autoscale-tab="schedule" class="flex-1 min-w-[190px] rounded-xl px-4 py-3 text-sm font-bold transition">🗓️ ตารางปรับกำลังเครื่อง</button>${workloadTabs.map(tab => `<button type="button" role="tab" data-autoscale-tab="${tab.key}" class="flex-1 min-w-[145px] rounded-xl px-4 py-3 text-sm font-bold transition">${tab.label}</button>`).join('')}</div>
      <div id="autoscale-panel-overview" data-autoscale-panel="overview" role="tabpanel" class="space-y-5"><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">🗓️ ตารางปรับกำลังเครื่อง (เวลาไทย)</h2>${state.mode !== 'schedule' || !backendSupportsMultiTier ? '<p class="mt-3 text-red-700">backend ยังไม่พร้อมสำหรับตาราง Micro / Small / Medium — กรุณา deploy autoscale-tick รุ่นใหม่ แล้วกดรีเฟรชสถานะก่อนบันทึก</p>' : ''}<p class="text-sm text-gray-600 mt-2">ระบบจะเลือกเป้าหมายตามช่วงเวลาที่กำหนด: Micro → Small → Medium และจะลดระดับก็ต่อเมื่อ health/guardrail ผ่าน</p><p class="text-sm text-gray-600 mt-2">ปิดใช้งาน = หยุดสั่งปรับเครื่องและคงระดับปัจจุบัน ไม่ใช่ปิดฐานข้อมูล</p><div class="mt-4 border rounded-xl p-4 ${config.enabled ? 'bg-green-50 border-green-300 text-green-900' : 'bg-gray-100 border-gray-300 text-gray-800'}"><p class="text-lg font-bold">สถานะตาราง: ${config.enabled ? '🟢 เปิดใช้งาน' : '⚪ ปิดใช้งาน'}</p><p class="text-sm mt-1">เป้าหมายตามเวลาตอนนี้: <strong>${targetLabel}</strong></p></div><p class="text-xs text-gray-500 mt-2">ระดับเครื่องที่ตรวจจาก Supabase: ${esc(state.currentTier || 'ยังไม่มีข้อมูล')} · ตรวจระดับจริงล่าสุด: ${state.currentTierObservedAt ? esc(new Date(state.currentTierObservedAt).toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' })) : 'ยังไม่เคยตรวจ'}</p><p class="text-xs text-gray-500 mt-1">สถานะงาน: ${esc(state.status || '—')} · คำสั่งที่รอยืนยัน: ${esc(state.pendingTier ? tierLabel(state.pendingTier) : 'ไม่มี')}</p>${state.lastError ? `<p class="text-xs text-amber-700 mt-1">รายละเอียด: ${esc(state.lastError)}</p>` : ''}<div class="flex flex-wrap gap-3 mt-4"><button id="as-enable" class="border rounded-xl px-4 py-2 ${config.enabled ? 'bg-green-700 border-green-700 text-white' : 'bg-white border-green-700 text-green-800'}">เปิดใช้งาน${config.enabled ? ' ✓' : ''}</button><button id="as-disable" class="border rounded-xl px-4 py-2 ${!config.enabled ? 'bg-gray-700 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-700'}">ปิดใช้งาน${!config.enabled ? ' ✓' : ''}</button><button id="as-refresh" class="border rounded-xl px-4 py-2">รีเฟรชสถานะ</button></div></div><div class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold">💰 ราคาอ้างอิง Compute</h2><div class="flex flex-wrap gap-2 mt-3">${tierSummary}</div><label class="block text-sm mt-4">วันที่อ้างอิง <input id="as-cost-date" type="date" value="${estimateDate}" class="border rounded-lg p-2 mt-1"></label><div id="as-cost-tags" class="flex flex-wrap gap-3 mt-4"></div><p class="text-xs text-gray-500 mt-3">เป็นค่าประมาณตามตาราง ไม่ใช่ยอดบิลจริง และควรตรวจราคากับ Supabase ก่อนใช้งานจริง</p></div></div>
      <form id="as-form" data-autoscale-panel="schedule" role="tabpanel" class="space-y-4"><section class="border rounded-2xl p-4 bg-amber-50"><h3 class="font-bold">🛡️ Guardrail การลดระดับ</h3><p class="text-xs text-gray-600 mt-1">การเปลี่ยนขึ้นทำได้ในรอบตรวจถัดไป ส่วนการลดจะรอ health ปกติ, healthy streak และช่วง hold ที่กำหนด</p><div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3"><label class="text-sm">Hold หลัง Medium (นาที)<input name="minimumMediumHoldMinutes" type="number" min="0" max="1440" value="${config.guardrail.minimumMediumHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Hold หลัง Small (นาที)<input name="minimumSmallHoldMinutes" type="number" min="0" max="1440" value="${config.guardrail.minimumSmallHoldMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Healthy streak (รอบ)<input name="healthyStreakRequired" type="number" min="1" max="12" value="${config.guardrail.healthyStreakRequired}" class="block border rounded-lg p-2 w-full mt-1"></label><label class="text-sm">Recovery lock (นาที)<input name="recoveryLockMinutes" type="number" min="0" max="1440" value="${config.guardrail.recoveryLockMinutes}" class="block border rounded-lg p-2 w-full mt-1"></label></div></section><section class="border rounded-2xl p-4 bg-white"><div class="flex flex-wrap justify-between gap-3 items-end"><div><h3 class="font-bold">ตารางช่วงเวลา</h3><p class="text-xs text-gray-500 mt-1">กำหนดวันซ้ำได้หลายวัน และกรอกข้ามวันได้ เช่น 22:00–02:00</p></div><label class="text-sm">ระดับพื้นฐานนอกช่วงเวลา<select name="defaultTier" class="border rounded-lg p-2 ml-2">${tierSelect(config.defaultTier)}</select></label></div><div class="mt-4">${renderTimeline(config)}</div></section><div id="as-rules" class="space-y-4">${config.rules.map(renderRule).join('')}</div><div class="flex flex-wrap gap-3"><button type="button" id="as-add" class="border bg-white rounded-xl px-4 py-2">＋ เพิ่มช่วงเวลา</button><button type="button" id="as-weekday-template" class="border bg-white rounded-xl px-4 py-2">สร้างตารางวันเรียนพื้นฐาน</button><button type="submit" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกตารางเวลา</button></div><p class="text-xs text-gray-500">ระบบจะเลือก tier สูงสุดเมื่อช่วงเวลาซ้อนกัน และมีผลในรอบตรวจถัดไป ปกติทุก 5 นาที</p></form>
      ${workloadTabs.map(tab => `<section id="autoscale-panel-${tab.key}" data-autoscale-panel="${tab.key}" role="tabpanel" class="bg-white border rounded-2xl p-5 shadow-sm"><h2 class="font-bold text-lg">${tab.label}</h2><p class="text-sm text-gray-600 mt-2">${tab.description} · AUTO ใช้ตาราง, ON บังคับเปิด, OFF บังคับปิด</p><div class="space-y-4 mt-4">${tab.features.map(key => renderWorkloadFeature(key, workloadConfig)).join('')}</div></section>`).join('')}
      <div data-autoscale-workload-actions class="hidden flex gap-3 bg-white border rounded-2xl p-4 shadow-sm"><button type="button" id="workload-save" class="bg-indigo-700 text-white rounded-xl px-4 py-2">บันทึกการตั้งค่า Workload ทั้งหมด</button><button type="button" id="workload-refresh" class="border rounded-xl px-4 py-2">รีเฟรช Workload</button><p class="self-center text-xs text-gray-500">บันทึกครั้งเดียว ครอบคลุมทุกแท็บ</p></div>
    </div>`;

    const setActiveTab = tab => {
      activeTab = tab;
      content.querySelectorAll('[data-autoscale-tab]').forEach(button => { const active = button.dataset.autoscaleTab === activeTab; button.setAttribute('aria-selected', String(active)); button.classList.toggle('bg-indigo-700', active); button.classList.toggle('text-white', active); button.classList.toggle('shadow-sm', active); button.classList.toggle('bg-gray-100', !active); button.classList.toggle('text-gray-700', !active); });
      content.querySelectorAll('[data-autoscale-panel]').forEach(panel => panel.classList.toggle('hidden', panel.dataset.autoscalePanel !== activeTab));
      const isWorkloadTab = workloadTabs.some(tabItem => tabItem.key === activeTab);
      content.querySelectorAll('[data-autoscale-workload-actions]').forEach(actions => actions.classList.toggle('hidden', !isWorkloadTab));
    };
    content.querySelectorAll('[data-autoscale-tab]').forEach(button => { button.id = `autoscale-tab-${button.dataset.autoscaleTab}`; button.onclick = () => setActiveTab(button.dataset.autoscaleTab); });
    setActiveTab(activeTab);

    const updateCosts = () => {
      try {
        const costs = estimateComputeCost({ ...collect(), enabled: false }, estimateDate);
        content.querySelector('#as-cost-tags').innerHTML = [['day', 'รายวัน'], ['week', 'รายสัปดาห์'], ['month', 'รายเดือน']].map(([key, label]) => { const item = costs[key]; return `<span class="border bg-indigo-50 text-indigo-900 rounded-xl px-4 py-3"><span class="block text-xs">${label} (${item.days} วัน)</span><strong>$${item.usd.toFixed(4)}</strong><span class="block text-xs">Micro ${item.microHours.toFixed(1)} ชม. · Small ${item.smallHours.toFixed(1)} ชม. · Medium ${item.mediumHours.toFixed(1)} ชม.</span></span>`; }).join('');
      } catch { const target = content.querySelector('#as-cost-tags'); if (target) target.textContent = 'กรุณากรอกวันที่ เวลา วัน และระดับเครื่องให้ครบเพื่อคำนวณ'; }
    };
    content.querySelector('#as-cost-date').onchange = event => { estimateDate = event.target.value; updateCosts(); };
    content.querySelector('#as-form').addEventListener('input', updateCosts);
    updateCosts();

    const persist = async enabled => {
      try {
        const next = enabled === false ? { ...config, enabled: false } : { ...collect(), enabled: enabled === true ? true : config.enabled };
        const normalized = validateSchedule(next);
        if (!backendSupportsMultiTier || (normalized.enabled && state.mode !== 'schedule')) throw new Error('backend ยังไม่พร้อมสำหรับ schema ตารางใหม่ กรุณา deploy autoscale-tick แล้วกดรีเฟรชสถานะก่อน');
        content.querySelectorAll('button').forEach(button => { button.disabled = true; });
        const { error } = await supabase.from('system_config').upsert({ key: 'autoscaleSchedule', value: JSON.stringify(normalized), updated_at: new Date().toISOString() }, { onConflict: 'key' });
        if (error) throw error;
        config = { ...normalized, guardrail: normalizeGuardrail(normalized.guardrail) };
        draw();
        showToast('บันทึกแล้ว มีผลในรอบตรวจถัดไป', 'success');
      } catch (error) { showToast(esc(error.message), 'error'); content.querySelectorAll('button').forEach(button => { button.disabled = false; }); }
    };
    content.querySelector('#as-form').onsubmit = event => { event.preventDefault(); persist(); };
    content.querySelector('#as-enable').onclick = () => persist(true);
    content.querySelector('#as-disable').onclick = () => persist(false);
    content.querySelector('#as-refresh').onclick = () => { if (confirm('รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?')) renderAutoscaleSettings(); };
    content.querySelector('#as-add').onclick = () => { config = validateSchedule({ ...collect(), enabled: false }); config.rules.push(newRule()); draw(); };
    content.querySelector('#as-weekday-template').onclick = () => { config = validateSchedule({ ...collect(), enabled: false }); config.rules = [newRule()]; draw(); };
    content.querySelectorAll('[data-remove-rule]').forEach(button => button.onclick = () => { config = validateSchedule({ ...collect(), enabled: false }); const rule = button.closest('[data-rule]'); config.rules.splice(Number(rule.dataset.rule), 1); draw(); });
    content.querySelectorAll('[data-duplicate-rule]').forEach(button => button.onclick = () => { config = validateSchedule({ ...collect(), enabled: false }); const rule = button.closest('[data-rule]'); const copy = { ...config.rules[Number(rule.dataset.rule)], id: `rule-${Date.now()}`, label: `${config.rules[Number(rule.dataset.rule)].label || 'ช่วงเวลา'} สำเนา` }; config.rules.splice(Number(rule.dataset.rule) + 1, 0, copy); draw(); });
    content.querySelectorAll('[data-day-toggle]').forEach(button => button.onclick = () => { const selected = button.dataset.selected !== 'true'; button.dataset.selected = String(selected); button.className = dayButtonClass(selected); updateCosts(); });
    content.querySelectorAll('[data-day-preset]').forEach(button => button.onclick = () => { const section = button.closest('[data-rule]'); const selectedDays = button.dataset.dayPreset === 'all' ? [0, 1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5]; section.querySelectorAll('[data-day-toggle]').forEach(dayButton => { const selected = selectedDays.includes(Number(dayButton.dataset.dayToggle)); dayButton.dataset.selected = String(selected); dayButton.className = dayButtonClass(selected); }); updateCosts(); });
    content.querySelector('#workload-save').onclick = async () => { try { content.querySelectorAll('button').forEach(button => { button.disabled = true; }); workloadConfig = normalizeWorkloadConfig({ schemaVersion: 1, timezone: 'Asia/Bangkok', features: Object.fromEntries([...content.querySelectorAll('[data-workload-feature]')].map(section => [section.dataset.workloadFeature, { mode: section.querySelector('[name=mode]').value, dateFrom: section.querySelector('[name=dateFrom]')?.value || null, dateTo: section.querySelector('[name=dateTo]')?.value || null, start: section.querySelector('[name=start]').value, end: section.querySelector('[name=end]').value, bufferBefore: Number(section.querySelector('[name=bufferBefore]').value || 0), bufferAfter: Number(section.querySelector('[name=bufferAfter]').value || 0), days: [...section.querySelectorAll('input[type=checkbox][name^=day-]')].map(input => input.checked) }])) }); await saveWorkloadConfig(workloadConfig); showToast('บันทึก Workload Control แล้ว', 'success'); draw(); } catch (error) { showToast(esc(error.message), 'error'); content.querySelectorAll('button').forEach(button => { button.disabled = false; }); } };
    content.querySelector('#workload-refresh').onclick = () => { if (confirm('รีเฟรชจะทิ้งการแก้ไขที่ยังไม่บันทึก ต้องการดำเนินการหรือไม่?')) renderAutoscaleSettings(); };
  };
  draw();
}
