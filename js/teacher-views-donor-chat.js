// js/teacher-views-donor-chat.js
// Phase 2 — กลุ่มแชทใหญ่สำหรับครูผู้สนับสนุน (text only, ยังไม่มีรูป/สติกเกอร์/ปักหมุด/บันทึกโน้ต)
// ฝั่งครู: ปุ่มลอย (FAB) แบบเดียวกับ feedback widget เปิดเป็นป๊อปอัพ — ไม่ใช่เปลี่ยนหน้าเต็ม
// ฝั่งแอดมิน: หน้าเต็มในแดชบอร์ด (renderDonorChatAdmin) ต่อยอด pattern feedback-admin
import {
  checkDonorChatAccess, getDonorGroupRoomId, getChatMessages, sendChatMessage, getTeacherNamesByProfileIds,
} from './api.js'
import { supabase } from './supabase.js'
import { showToast } from './ui.js'
import { setContent, setTitle, setActiveNav, _htmlEsc } from './teacher-views-utils.js'

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
  m.className = 'fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50'
  m.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[85vh] flex flex-col">
      <div style="background:linear-gradient(135deg,#f59e0b,#b45309);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
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

  const roomId = await getDonorGroupRoomId()
  if (!roomId) {
    bodyEl.innerHTML = `<p class="text-center text-gray-400 py-12">ไม่พบห้องแชท กรุณาติดต่อแอดมิน</p>`
    return
  }
  await _renderRoom(bodyEl, roomId, { myProfileId: teacher.profile_id, sendAsRole: 'teacher' })
}

// ─── ฝั่งแอดมิน — หน้าเต็มในแดชบอร์ด ─────────────────────────────────────────
export async function renderDonorChatAdmin() {
  _teardown()
  setActiveNav('donor-chat-admin')
  setTitle('💬 แชทครูผู้สนับสนุน')

  const { data: { user } } = await supabase.auth.getUser()
  const roomId = await getDonorGroupRoomId()
  if (!roomId) {
    setContent(`<p class="text-center text-gray-400 py-12">ไม่พบห้องแชท</p>`)
    return
  }

  setContent(`<div id="donor-chat-admin-body" class="flex-1 min-h-0 flex flex-col h-[75vh]"></div>`)
  const bodyEl = document.getElementById('donor-chat-admin-body')
  await _renderRoom(bodyEl, roomId, { myProfileId: user?.id, sendAsRole: 'admin' })
}

// ─── ตัวแสดงห้องแชท ใช้ร่วมกันทั้งป๊อปอัพครูและหน้าแอดมิน ───────────────────────
async function _renderRoom(containerEl, roomId, { myProfileId, sendAsRole }) {
  containerEl.innerHTML = `
    <div id="chat-msg-list" class="flex-1 overflow-y-auto p-4 space-y-3"></div>
    <form id="chat-send-form" class="flex items-center gap-2 p-3 border-t border-gray-100 flex-shrink-0">
      <input id="chat-msg-input" type="text" maxlength="2000" placeholder="พิมพ์ข้อความ..."
        class="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
      <button type="submit" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">ส่ง</button>
    </form>`

  const listEl = containerEl.querySelector('#chat-msg-list')
  const messages = await getChatMessages(roomId)
  await _renderMessages(listEl, messages, myProfileId)
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
      await _pollNewMessages(roomId, listEl, myProfileId)
    } catch (err) {
      showToast(err.message ?? 'ส่งข้อความไม่สำเร็จ', 'error')
    }
  })

  _channel = supabase.channel(`chat-room-${roomId}`)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_messages', filter: `room_id=eq.${roomId}` },
      () => _pollNewMessages(roomId, listEl, myProfileId))
    .subscribe()

  // backup polling — realtime เป็น optimization ไม่ใช่ source of truth (ตาม pattern quiz-monitor.js)
  _pollInterval = setInterval(() => _pollNewMessages(roomId, listEl, myProfileId), 5000)
}

async function _pollNewMessages(roomId, listEl, myProfileId) {
  const all = await getChatMessages(roomId).catch(() => null)
  if (!all || !listEl.isConnected) return
  const fresh = all.filter(m => m.id > _lastMessageId)
  if (!fresh.length) return
  const wasAtBottom = listEl.scrollHeight - listEl.scrollTop - listEl.clientHeight < 60
  await _renderMessages(listEl, fresh, myProfileId, { append: true })
  _lastMessageId = all.at(-1).id
  if (wasAtBottom) listEl.scrollTop = listEl.scrollHeight
}

async function _renderMessages(listEl, messages, myProfileId, { append = false } = {}) {
  const teacherProfileIds = messages.filter(m => m.author_role === 'teacher').map(m => m.author_profile_id)
  const nameByProfile = await getTeacherNamesByProfileIds(teacherProfileIds)
  const html = messages.map(m => _bubbleHTML(m, myProfileId, nameByProfile)).join('')
  if (append) listEl.insertAdjacentHTML('beforeend', html)
  else listEl.innerHTML = html
}

function _bubbleHTML(m, myProfileId, nameByProfile) {
  const isMine = m.author_profile_id === myProfileId
  const isAdmin = m.author_role === 'admin'
  const displayName = isAdmin ? 'แอดมิน' : (nameByProfile[m.author_profile_id] ?? 'ครู')
  return `
    <div class="flex ${isMine ? 'justify-end' : 'justify-start'}">
      <div class="max-w-[75%] ${isMine ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl px-4 py-2.5">
        ${!isMine ? `<p class="text-[0.7rem] font-bold ${isAdmin ? 'text-amber-600' : 'text-indigo-500'} mb-0.5">${isAdmin ? '🛡️ ' : ''}${_htmlEsc(displayName)}</p>` : ''}
        <p class="text-sm whitespace-pre-wrap break-words">${_htmlEsc(m.body ?? '')}</p>
      </div>
    </div>`
}
