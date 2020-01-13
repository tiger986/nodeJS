const express = require('express')
const users2 = require('./routes/users2.js')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false})) //接收表单格式提交(前端传参格式)
app.use(bodyParser.json()) //接收json字符串格式提交(前端传参格式)

app.use('/api', users2)

app.listen(9527, 'localhost', () => {
    console.log('localhost:9527')
})