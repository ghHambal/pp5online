// js/teacher-views-donor-chat.js
// Phase 4 — แชทย่อยกับแอดมิน (ครูกดสร้างเอง) + room switcher ฝั่งแอดมิน
// ฝั่งครู: ปุ่มลอย (FAB) แบบเดียวกับ feedback widget เปิดเป็นป๊อปอัพ — ไม่ใช่เปลี่ยนหน้าเต็ม
// ฝั่งแอดมิน: หน้าเต็มในแดชบอร์ด (renderDonorChatAdmin) ต่อยอด pattern feedback-admin
import {
  checkDonorChatAccess, getDonorGroupRoomId, getChatMessages, sendChatMessage,
  getTeacherNamesByProfileIds, getChatTiersByProfileIds, getSystemConfig,
  getMyAdminDmRoomId, getOrCreateAdminDmRoomId, getAdminDmRoomsForAdmin,
} from './api.js'
import { supabase } from './supabase.js'
import { showToast } from './ui.js'
import { setContent, setTitle, setActiveNav, _htmlEsc } from './teacher-views-utils.js'
import { uploadChatImage } from './storage.js'
import { _parseDonationStickers } from './teacher.js'

let _channel = null
let _pollInterval = null
let _lastMessageId = 0

function _teardown() {
  if (_channel) { supabase.removeChannel(_channel); _channel = null }
  if (_pollInterval) { clearInterval(_pollInterval); _pollInterval = null }
  _lastMessageId = 0
}
window._cleanupDonorChat = _teardown

// ─── ฝั่งครู — ปุ่มลอย ──────────────────────────────────────────────────────
export function injectDonorChatWidget(teacher) {
  if (!teacher?.id || document.getElementById('donor-chat-fab')) return

  const fab = document.createElement('button')
  fab.id = 'donor-chat-fab'
  fab.title = 'แชทครูผู้สนับสนุน'
  fab.className = 'fixed z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full text-white shadow-lg flex items-center justify-center overflow-hidden transition-transform hover:scale-105'
  // ซ้อนเหนือปุ่ม feedback (💬) อีกชั้น กันทับกัน
  fab.style.cssText = 'position:fixed;right:max(0.75rem, env(safe-area-inset-right));left:auto;top:auto;bottom:calc(max(0.75rem, env(safe-area-inset-bottom)) + 68px + 64px);background:linear-gradient(135deg,#f59e0b,#b45309);font-size:1.3rem;'
  fab.textContent = '👑'
  document.body.appendChild(fab)
  fab.addEventListener('click', () => openDonorChatWidget(teacher))
}

function _closeWidget() {
  _teardown()
  document.getElementById('donor-chat-widget')?.remove()
}

export async function openDonorChatWidget(teacher) {
  document.getElementById('donor-chat-widget')?.remove()
  _teardown()

  const m = document.createElement('div')
  m.id = 'donor-chat-widget'
  // มือถือ (ต่ำกว่า sm): เต็มจอสนิท ไม่มีขอบ/มุมโค้ง — desktop (sm ขึ้นไป): การ์ดลอยกลางจอเหมือนเดิม
  m.className = 'fixed inset-0 z-[200] flex items-center justify-center sm:p-4 bg-black/50'
  m.innerHTML = `
    <div class="bg-white sm:rounded-3xl shadow-2xl w-full h-full sm:h-auto sm:max-w-lg overflow-hidden sm:max-h-[85vh] flex flex-col">
      <div style="background:linear-gradient(135deg,#f59e0b,#b45309);padding-top:max(1rem, env(safe-area-inset-top));" class="px-5 pb-4 flex items-center justify-between flex-shrink-0">
        <div class="min-w-0">
          <h3 class="text-white font-bold text-base">👑 แชทครูผู้สนับสนุน</h3>
          <p class="text-white/80 text-xs mt-0.5">กลุ่มแชทเฉพาะครูผู้สนับสนุนภาคเรียนนี้</p>
        </div>
        <button id="donor-chat-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div id="donor-chat-body" class="flex-1 min-h-0 flex flex-col"></div>
    </div>`
  document.body.appendChild(m)
  m.addEventListener('click', e => { if (e.target === m) _closeWidget() })
  m.querySelector('#donor-chat-close').addEventListener('click', _closeWidget)

  const bodyEl = m.querySelector('#donor-chat-body')
  bodyEl.innerHTML = `<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>`

  const ok = await checkDonorChatAccess(teacher.id, 1).catch(() => false)
  if (!ok) {
    bodyEl.innerHTML = `
      <div class="p-8 text-center">
        <p class="text-4xl mb-3">⭐</p>
        <p class="font-bold text-gray-700 mb-2">สิทธิ์เฉพาะครูผู้สนับสนุน</p>
        <p class="text-sm text-gray-500 mb-4">โดเนทในภาคเรียนนี้เพื่อเข้าร่วมกลุ่มแชทครูผู้สนับสนุน พูดคุย/แลกเปลี่ยนกับครูท่านอื่น และคุยกับแอดมินได้โดยตรง</p>
        <button id="btn-donor-chat-donate" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`
    bodyEl.querySelector('#btn-donor-chat-donate')?.addEventListener('click', () => {
      _closeWidget()
      document.getElementById('btn-donate-float')?.click()
    })
    return
  }

  // แท็บสลับ: กลุ่มใหญ่ / แอดมิน — ครูกดปุ่มสร้างแชทกับแอดมินเองครั้งแรก
  bodyEl.innerHTML = `
    <div class="flex border-b border-gray-100 flex-shrink-0">
      <button class="donor-chat-tab flex-1 py-2.5 text-sm font-semibold transition" data-tab="group">👥 กลุ่มใหญ่</button>
      <button class="donor-chat-tab flex-1 py-2.5 text-sm font-semibold transition" data-tab="admin">🛡️ แอดมิน</button>
    </div>
    <div id="donor-chat-slot" class="flex-1 min-h-0 flex flex-col"></div>`

  const tabs = [...bodyEl.querySelectorAll('.donor-chat-tab')]
  const slotEl = bodyEl.querySelector('#donor-chat-slot')

  const setTab = (tab) => {
    tabs.forEach(t => {
      const on = t.dataset.tab === tab
      t.className = `donor-chat-tab flex-1 py-2.5 text-sm font-semibold transition ${on ? 'text-amber-600 border-b-2 border-amber-500' : 'text-gray-400 hover:text-gray-600'}`
    })
    if (tab === 'group') _loadGroupTab(slotEl, teacher)
    else _loadAdminTab(slotEl, teacher)
  }
  tabs.forEach(t => t.addEventListener('click', () => setTab(t.dataset.tab)))
  setTab('group')
}

async function _loadGroupTab(slotEl, teacher) {
  _teardown()
  slotEl.innerHTML = `<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>`
  const roomId = await getDonorGroupRoomId()
  if (!roomId) {
    slotEl.innerHTML = `<p class="text-center text-gray-400 py-12">ไม่พบห้องแชท กรุณาติดต่อแอดมิน</p>`
    return
  }
  await _renderRoom(slotEl, roomId, { myProfileId: teacher.profile_id, sendAsRole: 'teacher' })
}

async function _loadAdminTab(slotEl, teacher) {
  _teardown()
  slotEl.innerHTML = `<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>`
  const existingRoomId = await getMyAdminDmRoomId(teacher.id).catch(() => null)
  if (existingRoomId) {
    await _renderRoom(slotEl, existingRoomId, { myProfileId: teacher.profile_id, sendAsRole: 'teacher' })
    return
  }
  slotEl.innerHTML = `
    <div class="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <p class="text-4xl mb-3">🛡️</p>
      <p class="font-bold text-gray-700 mb-2">ยังไม่มีแชทกับแอดมิน</p>
      <p class="text-sm text-gray-500 mb-4">เริ่มแชทส่วนตัวกับแอดมินได้เลย เห็นเฉพาะคุณครูกับแอดมินเท่านั้น</p>
      <button id="btn-create-admin-dm" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">+ เริ่มแชทกับแอดมิน</button>
    </div>`
  slotEl.querySelector('#btn-create-admin-dm').addEventListener('click', async (e) => {
    const btn = e.currentTarget
    btn.disabled = true
    btn.textContent = 'กำลังสร้าง...'
    try {
      const roomId = await getOrCreateAdminDmRoomId()
      await _renderRoom(slotEl, roomId, { myProfileId: teacher.profile_id, sendAsRole: 'teacher' })
    } catch (err) {
      showToast(err.message ?? 'สร้างแชทไม่สำเร็จ', 'error')
      btn.disabled = false
      btn.textContent = '+ เริ่มแชทกับแอดมิน'
    }
  })
}

// ─── ฝั่งแอดมิน — หน้าเต็มในแดชบอร์ด พร้อม room switcher ─────────────────────────
export async function renderDonorChatAdmin() {
  _teardown()
  setActiveNav('donor-chat-admin')
  setTitle('💬 แชทครูผู้สนับสนุน')

  const { data: { user } } = await supabase.auth.getUser()
  const groupRoomId = await getDonorGroupRoomId()
  const dmRooms = await getAdminDmRoomsForAdmin().catch(() => [])

  const chipHtml = (id, label, active) =>
    `<button class="donor-chat-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${active ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}" data-room-id="${id}">${_htmlEsc(label)}</button>`

  setContent(`
    <div class="flex flex-col h-[75vh]">
      <div id="donor-chat-room-switcher" class="flex items-center gap-2 pb-3 overflow-x-auto flex-shrink-0">
        ${groupRoomId ? chipHtml(groupRoomId, '👥 กลุ่มใหญ่', true) : ''}
        ${dmRooms.map(r => chipHtml(r.id, `🛡️ ${r.teachers?.full_name ?? 'ครู'}`, false)).join('')}
        ${!dmRooms.length ? `<span class="text-xs text-gray-400 flex-shrink-0">ยังไม่มีครูสร้างแชทกับแอดมิน</span>` : ''}
      </div>
      <div id="donor-chat-admin-body" class="flex-1 min-h-0 flex flex-col border border-gray-100 rounded-2xl overflow-hidden"></div>
    </div>`)

  const switcherEl = document.getElementById('donor-chat-room-switcher')
  const bodyEl = document.getElementById('donor-chat-admin-body')

  const activate = async (roomId) => {
    switcherEl.querySelectorAll('.donor-chat-chip').forEach(c => {
      const on = c.dataset.roomId === String(roomId)
      c.className = `donor-chat-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${on ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`
    })
    await _renderRoom(bodyEl, roomId, { myProfileId: user?.id, sendAsRole: 'admin' })
  }
  switcherEl.querySelectorAll('.donor-chat-chip').forEach(c =>
    c.addEventListener('click', () => activate(c.dataset.roomId)))

  if (groupRoomId) await activate(groupRoomId)
  else bodyEl.innerHTML = `<p class="text-center text-gray-400 py-12">ไม่พบห้องแชท</p>`
}

// ─── ตัวแสดงห้องแชท ใช้ร่วมกันทั้งป๊อปอัพครูและหน้าแอดมิน ───────────────────────
async function _renderRoom(containerEl, roomId, { myProfileId, sendAsRole }) {
  _teardown()
  containerEl.innerHTML = `
    <div id="chat-msg-list" class="flex-1 overflow-y-auto p-4 space-y-3"></div>
    <form id="chat-send-form" class="flex items-center gap-2 p-3 border-t border-gray-100 flex-shrink-0" style="padding-bottom:max(0.75rem, env(safe-area-inset-bottom));">
      <input type="file" id="chat-img-input" accept="image/*" class="hidden" />
      <button type="button" id="chat-img-btn" title="แนบรูปภาพ"
        class="w-10 h-10 flex-shrink-0 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center text-lg">📷</button>
      <input id="chat-msg-input" type="text" maxlength="2000" placeholder="พิมพ์ข้อความ..."
        class="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
      <button type="submit" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">ส่ง</button>
    </form>`

  // ดึง cfg + สติกเกอร์ครั้งเดียวตอนเปิดห้อง (ไม่ผูกกับ window._pp5DonorTierIndex ที่เป็นยอดสะสมตลอดชีพ)
  const cfg = await getSystemConfig().catch(() => ({}))
  const stickerTiers = _parseDonationStickers(cfg)

  const listEl = containerEl.querySelector('#chat-msg-list')
  const messages = await getChatMessages(roomId)
  await _renderMessages(listEl, messages, myProfileId, stickerTiers)
  listEl.scrollTop = listEl.scrollHeight
  _lastMessageId = messages.at(-1)?.id ?? 0

  containerEl.querySelector('#chat-send-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const input = containerEl.querySelector('#chat-msg-input')
    const body = input.value.trim()
    if (!body) return
    input.value = ''
    try {
      await sendChatMessage({ roomId, authorRole: sendAsRole, body })
      await _pollNewMessages(roomId, listEl, myProfileId, stickerTiers)
    } catch (err) {
      showToast(err.message ?? 'ส่งข้อความไม่สำเร็จ', 'error')
    }
  })

  const imgInput = containerEl.querySelector('#chat-img-input')
  containerEl.querySelector('#chat-img-btn').addEventListener('click', () => imgInput.click())
  imgInput.addEventListener('change', async () => {
    const file = imgInput.files?.[0]
    imgInput.value = ''
    if (!file) return
    const btn = containerEl.querySelector('#chat-img-btn')
    btn.disabled = true
    btn.textContent = '⏳'
    try {
      const imageUrl = await uploadChatImage(roomId, file)
      await sendChatMessage({ roomId, authorRole: sendAsRole, body: null, imageUrl })
      await _pollNewMessages(roomId, listEl, myProfileId, stickerTiers)
    } catch (err) {
      showToast(err.message ?? 'ส่งรูปไม่สำเร็จ', 'error')
    } finally {
      btn.disabled = false
      btn.textContent = '📷'
    }
  })

  _channel = supabase.channel(`chat-room-${roomId}`)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_messages', filter: `room_id=eq.${roomId}` },
      () => _pollNewMessages(roomId, listEl, myProfileId, stickerTiers))
    .subscribe()

  // backup polling — realtime เป็น optimization ไม่ใช่ source of truth (ตาม pattern quiz-monitor.js)
  _pollInterval = setInterval(() => _pollNewMessages(roomId, listEl, myProfileId, stickerTiers), 5000)
}

async function _pollNewMessages(roomId, listEl, myProfileId, stickerTiers) {
  const all = await getChatMessages(roomId).catch(() => null)
  if (!all || !listEl.isConnected) return
  const fresh = all.filter(m => m.id > _lastMessageId)
  if (!fresh.length) return
  const wasAtBottom = listEl.scrollHeight - listEl.scrollTop - listEl.clientHeight < 60
  await _renderMessages(listEl, fresh, myProfileId, stickerTiers, { append: true })
  _lastMessageId = all.at(-1).id
  if (wasAtBottom) listEl.scrollTop = listEl.scrollHeight
}

async function _renderMessages(listEl, messages, myProfileId, stickerTiers, { append = false } = {}) {
  const teacherProfileIds = messages.filter(m => m.author_role === 'teacher').map(m => m.author_profile_id)
  const [nameByProfile, tierByProfile] = await Promise.all([
    getTeacherNamesByProfileIds(teacherProfileIds),
    getChatTiersByProfileIds(teacherProfileIds),
  ])
  const html = messages.map(m => _bubbleHTML(m, myProfileId, nameByProfile, tierByProfile, stickerTiers)).join('')
  if (append) listEl.insertAdjacentHTML('beforeend', html)
  else listEl.innerHTML = html
}

// โปรไฟล์ผู้ส่ง — สติกเกอร์ตามระดับโดเนท (ภาคเรียนนี้) เป็น "รูปโปรไฟล์" วงกลม + ชื่อเล็กๆ ด้านล่าง
function _avatarHTML(m, nameByProfile, tierByProfile, stickerTiers) {
  const isAdmin = m.author_role === 'admin'
  const displayName = isAdmin ? 'แอดมิน' : (nameByProfile[m.author_profile_id] ?? 'ครู')
  let inner = '🛡️'
  let ringColor = '#f59e0b' // amber-500
  if (!isAdmin) {
    const tierIndex = tierByProfile[m.author_profile_id]
    const tier = tierIndex ? stickerTiers[tierIndex - 1] : null
    if (tier) {
      const sticker = String(tier.sticker ?? '')
      inner = /^https?:\/\//.test(sticker)
        ? `<img src="${_htmlEsc(sticker)}" class="w-full h-full object-contain" />`
        : _htmlEsc(sticker || '🏅')
      ringColor = tier.color || '#6366f1'
    } else {
      inner = '👤'
      ringColor = '#9ca3af' // gray-400
    }
  }
  return `
    <div class="flex flex-col items-center w-11 flex-shrink-0">
      <div class="w-9 h-9 rounded-full flex items-center justify-center text-lg overflow-hidden bg-white shadow-sm" style="border:2px solid ${_htmlEsc(ringColor)};">
        ${inner}
      </div>
      <p class="text-[9px] text-gray-400 font-semibold mt-0.5 leading-tight text-center truncate w-11" title="${_htmlEsc(displayName)}">${_htmlEsc(displayName)}</p>
    </div>`
}

function _bubbleHTML(m, myProfileId, nameByProfile, tierByProfile, stickerTiers) {
  const isMine = m.author_profile_id === myProfileId
  const imageHtml = m.image_url
    ? `<img src="${_htmlEsc(m.image_url)}" class="rounded-xl max-w-full max-h-64 object-contain cursor-pointer mb-1" onclick="window.open('${_htmlEsc(m.image_url)}','_blank')" />`
    : ''
  const avatar = !isMine ? _avatarHTML(m, nameByProfile, tierByProfile, stickerTiers) : ''
  return `
    <div class="flex items-end gap-2 ${isMine ? 'justify-end' : 'justify-start'}">
      ${avatar}
      <div class="max-w-[70%] ${isMine ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl px-4 py-2.5">
        ${imageHtml}
        ${m.body ? `<p class="text-sm whitespace-pre-wrap break-words">${_htmlEsc(m.body)}</p>` : ''}
      </div>
    </div>`
}
