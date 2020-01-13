//静态路由访问资源（不用路由即可访问html页面，页面引入的css和js等资源也可正常使用）

const express = require('express')

const app = express()
app.use(express.static(__dirname + '/public')) //静态路由直接指向__dirname + '/public'中的名为index.html的文件

app.listen(9527, 'localhost', () => {
    console.log('localhost:9527/index.html')
})