//首屏渲染（在后端渲染好页面，再放到前端）

const express = require('express')
const router = require('./routes/firstScreenRenderingRouter.js')

const app = express()

//使用express-art-template模板, 需要安装模块（yarn add express-art-template）
// app.engine('art', require('express-art-template'))
// app.set('view options', {
//     debug: process.env.NODE_ENV !== 'production'
// })
// app.set('view engine', 'art')
// app.set('views', __dirname + '/views') //设置路径（模板文件所在目录的路径,设置后，再在firstScreenRenderingRouter.js中直接用firstScreenRendering.art即可，前面的路径可省略）

//使用ejs模板, 需要安装模块（yarn add ejs）
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use('/', router)

app.listen(9527, 'localhost', () => {
    console.log('localhost:9527')
})