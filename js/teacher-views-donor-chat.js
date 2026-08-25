// js/teacher-views-donor-chat.js
// Phase 2 — กลุ่มแชทใหญ่สำหรับครูผู้สนับสนุน (text only, ยังไม่มีรูป/สติกเกอร์/ปักหมุด/บันทึกโน้ต)
// ใช้ร่วมกันทั้งฝั่งครู (renderDonorChat) และฝั่งแอดมิน (renderDonorChatAdmin)
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

export async function renderDonorChat(teacher) {
  _teardown()
  setActiveNav('donor-chat')
  setTitle('💬 แชทครูผู้สนับสนุน')
  setContent(`<div class="flex justify-center py-12 text-gray-400">กำลังโหลด...</div>`)

  const ok = await checkDonorChatAccess(teacher.id, 1).catch(() => false)
  if (!ok) {
    setContent(`
      <div class="bg-white rounded-3xl border border-amber-200 p-8 text-center shadow-sm max-w-md mx-auto">
        <p class="text-4xl mb-3">⭐</p>
        <p class="font-bold text-gray-700 mb-2">สิทธิ์เฉพาะครูผู้สนับสนุน</p>
        <p class="text-sm text-gray-500 mb-4">โดเนทในภาคเรียนนี้เพื่อเข้าร่วมกลุ่มแชทครูผู้สนับสนุน พูดคุย/แลกเปลี่ยนกับครูท่านอื่น และคุยกับแอดมินได้โดยตรง</p>
        <button id="btn-donor-chat-donate" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`)
    document.getElementById('btn-donor-chat-donate')?.addEventListener('click', () =>
      document.getElementById('btn-donate-float')?.click())
    return
  }

  const roomId = await getDonorGroupRoomId()
  if (!roomId) {
    setContent(`<p class="text-center text-gray-400 py-12">ไม่พบห้องแชท กรุณาติดต่อแอดมิน</p>`)
    return
  }
  await _renderRoom(roomId, { myProfileId: teacher.profile_id, sendAsRole: 'teacher' })
}

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
  await _renderRoom(roomId, { myProfileId: user?.id, sendAsRole: 'admin' })
}

async function _renderRoom(roomId, { myProfileId, sendAsRole }) {
  setContent(`
    <div class="flex flex-col h-[75vh] bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div id="chat-msg-list" class="flex-1 overflow-y-auto p-4 space-y-3"></div>
      <form id="chat-send-form" class="flex items-center gap-2 p-3 border-t border-gray-100 flex-shrink-0">
        <input id="chat-msg-input" type="text" maxlength="2000" placeholder="พิมพ์ข้อความ..."
          class="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
        <button type="submit" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">ส่ง</button>
      </form>
    </div>`)

  const listEl = document.getElementById('chat-msg-list')
  const messages = await getChatMessages(roomId)
  await _renderMessages(listEl, messages, myProfileId)
  listEl.scrollTop = listEl.scrollHeight
  _lastMessageId = messages.at(-1)?.id ?? 0

  document.getElementById('chat-send-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const input = document.getElementById('chat-msg-input')
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
