const socket = io()
const messageForm = document.getElementById('message-form')
const messageInput = document.getElementById('message-input')
const messagesDiv = document.getElementById('messages')

addSystemMessage('Welcome to the chat room!')

// TODO: add code here

// Helper Functions

function addMessageToDOM(message) {
  const messageElement = document.createElement('div')
  messageElement.classList.add('message')
  messageElement.innerHTML = `
    <div>${escapeHTML(message.text)}</div>
    <span class="timestamp">${message.timestamp}</span>
  `
  messagesDiv.appendChild(messageElement)
}

function addSystemMessage(text) {
  const messageElement = document.createElement('div')
  messageElement.classList.add('system-message')
  messageElement.textContent = text
  messagesDiv.appendChild(messageElement)
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function scrollToBottom() {
  messagesDiv.scrollTop = messagesDiv.scrollHeight
}
