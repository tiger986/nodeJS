//1.用express启动一个服务并创建路由访问html页面

// const express = require('express')

// const app = express()

// app.get('/', (req, res) => { //创建路由
//     res.send('hello world~')
// })

// app.get('/home', (req, res) => { //创建路由
//     res.sendFile(__dirname + '/views/home.html') //访问html文件（路径为被访问html文件的物理路径）(__dirname为当前文件的物理路径)
// })

// app.listen(8000, 'localhost', () => {
//     console.log('localhost:8000')
// })


//2.单独抽离路由(把router做成中间件)

const express = require('express')
const router = require('./routes/index.js') //index.js也可省略(只针对名为index.js的文件)
const users = require('./routes/users.js')

const app = express()

app.use('/', router)
app.use('/api', users) //这里写了'/api'，则users文件中不用再写，即直接写api后面的路由signin

app.listen(8000, 'localhost', () => {
    console.log('localhost:8000')
})

