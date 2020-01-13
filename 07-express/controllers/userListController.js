//写出后端接口，并用前端请求打印

const template = require('art-template')
const path = require('path')
const userListMod = require('../models/userListModel.js')

template.defaults.escape = false //是否开启对模板输出语句自动编码功能

const userListCon = {
    userList: (req, res) => {
        res.set('Content-Type', 'application/json; charset=utf8')
        // let webData = template(path.resolve(__dirname, '../views/userList.art'), { //使用模块art-template
        //     data: userListMod.retu()
        // })
        // res.send(webData)
        res.render('userList.art', {  //使用中间件express-art-template(需在userListServer.js中进行配置)
            data: JSON.stringify(userListMod.retu())
        })
    }
}

module.exports = userListCon