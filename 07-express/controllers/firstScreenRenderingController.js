//首屏渲染（在后端渲染好页面，再放到前端）

const firstScreenRenderingMod = require('../models/firstScreenRenderingModel')

const firstScreenRenderingCon = {
    fun: (req, res) => {
        //使用express-art-template模板(需在firstScreenRenderingServer.js中配置)
        // res.render('firstScreenRendering.art', { //.art可以省略
        //     data: firstScreenRenderingMod.fun()
        // })

        //使用ejs模板(需在firstScreenRenderingServer.js中配置)
        res.render('firstScreenRendering.ejs', { //.ejs可以省略
            data: firstScreenRenderingMod.fun()
        })
    }
}

module.exports = firstScreenRenderingCon