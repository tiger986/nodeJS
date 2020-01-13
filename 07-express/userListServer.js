//写出后端接口，并用前端请求打印

const express = require('express')
const router = require('./routes/userListRouter.js')
const bodyParser = require('body-parser')

const app = express()

app.engine('art', require('express-art-template')) //使用模板中间件，需要安装模块（yarn add express-art-template）
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
})
app.set('view engine', 'art')
app.set('views', __dirname + '/views') //设置路径（模板文件所在目录的路径,设置后，再在userListController.js中直接用userList.art即可，前面的路径可省略）

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.use('/api', router)

app.listen(9527, 'localhost', () => {
    console.log('localhost:9527')
})

