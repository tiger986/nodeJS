//前端server，运行client/index.html
const express = require('express') //yarn add express
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server) //yarn add socket.io

app.use( express.static(__dirname + '/client2'))

io.on('connection', (socket) => {
   socket.on('msgClient', (data) => {
      socket.broadcast.emit('msgServer', data)
   })
})

server.listen(3000)