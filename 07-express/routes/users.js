//路由中间件

const express = require('express')
const path = require('path')

const router = express.Router()

//console.log(router)

router.get('/signin', (req, res) => { //创建路由
    res.send('signin')
})

module.exports = router //暴露出该模块