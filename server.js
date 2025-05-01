import http from 'http'
import fs from 'fs'
import path from 'path'
import url from 'url'
import { Server } from 'socket.io'

const server = http.createServer((req, res) => {
  // TODO: implement webserver here
})

const messages = []

const io = new Server(server)
io.on('connection', (socket) => {
  // TODO: implement websocket stuff here
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
