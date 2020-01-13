//后端的MVC/RMVC (routes/signinRouter.js,models/signinModel.js,views/signin.art,controllers/signinController.js)

const signinMod = require('../models/signinModel.js')
const template = require('art-template')
const path = require('path')

const signinCon = {
    signin: (req, res) => {
        let {user, pass} = req.body
        res.set('Content-Type', 'application/json; charset=utf8') //application/json:以json格式返给前端数据
        //res.send(signinMod.save({user, pass}))
        //res.send(signinMod.save({...req.body}))
        let webData = template(path.resolve(__dirname, '../views/signin.art'), { //使用art-template模板，编写res数据体(前端需要的),(需要下载模块yarn add art-template)
            aaa: signinMod.save({user, pass}) ,//将signinMod.save()返回的数据做为请求此接口时，返给前端的res体中的data中的一个数据(看signin.art文件中的data赋值)
            abc: 'abc',
            efg: {
                hhh: 'hhh'
            }
        })
        res.send(webData)
    }
}

module.exports = {
    signin: signinCon.signin
}