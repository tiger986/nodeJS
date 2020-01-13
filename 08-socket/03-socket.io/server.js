//前端server，运行client/index.html
const express = require('express') //yarn add express
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server) //yarn add socket.io

app.use( express.static(__dirname + '/client'))

io.on('connection', (socket) => {
   //socket.emit('msg1', 'abc') //后端注册事件，让前端去响应
   //socket.broadcast.emit('msg1', 'abc') //同时远行多个客户端，其中一个响应msg1事件，则其他客户端会打印abc（主动响应的客户端除外）
   setInterval(() => {
        socket.emit('msg1', 'abc')
   }, 1000)
   socket.on('msg2', (data) => { //后端响应前端注册的事件
      console.log(data)
   })
})

server.listen(3000)