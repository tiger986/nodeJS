//node的第三方模块

//安装第三方模块 npm init -y --> yarn add request

const request = require('request') //第三方模块，需先安装（yarn add request）

//console.log(request)
request.get('http://api.douban.com/v2/movie/in_theaters', (err, response, body) => {
    if(err){
        console.log(err)
    }else{
        console.log(body)
    }
})