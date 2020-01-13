//前端server，运行client/index.html
const express = require('express') //yarn add express

const app = express()

app.use( express.static(__dirname + '/client'))

app.listen(3000, 'localhost', () => {
   console.log('localhost:3000')
})

//同时运行此文件和socketServer.js
//打开多个浏览器窗口，可实现时时对话(双工通信)