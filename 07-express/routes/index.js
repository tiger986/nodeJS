//路由中间件

const express = require('express')
const path = require('path')

const router = express.Router()

//console.log(router)

router.get('/', (req, res) => { //创建路由
    res.send('hello world~')
})

router.get('/home', (req, res) => { //创建路由
    res.sendFile(path.resolve(__dirname, '../views/home.html')) //访问html文件（路径为被访问html文件的物理路径）(__dirname为当前文件的物理路径)
})

module.exports = router //暴露出该模块
