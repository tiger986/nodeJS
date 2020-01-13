//获取请求参数
const express = require('express')

const router = express.Router()

//1.get
router.get('/users2', (req, res) => {
    //console.log(req.query)
    let {username, password} = req.query //解构赋值，将query对象中的username和passname的值抽离出来并赋给前面（req.query中必须要含有username和passname这两个名值对）
    res.set('Content-Type', 'text/plain; charset=utf8')
    res.send(`用户名:${username},密码:${password}`) //使用insomnia发送请求并查看结果
})

//2.post（需要装中间件，yarn add body-parser,然后在外层引入并使用）
router.post('/users2.1', (req, res) => {
    //console.log(req.query)
    let {username, password} = req.body //post要在body中获取参数
    res.set('Content-Type', 'text/plain; charset=utf8')
    res.send(`用户名:${username},密码:${password}`)  //用insomnia工具查看
})

//router.delete()

//router.all()  //所有请求方式

module.exports = router