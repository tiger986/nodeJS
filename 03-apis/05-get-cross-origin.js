//请求接口并将获取数据给浏览器显示（由于后端请求不受跨域限制，所以这样可以解决前端跨域问题）

const http = require('http')

const options = {
    hostname: 'qcxypf.primecloud.cn',
    port: 80, //若是https，则用443
    path: '/resource/getRessels/1',
    method: 'GET',
    headers: {//请求接口时的Request Headers
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Cookie': 'remember_82e5d2c56bdd0811318f0cf078b78bfc=eyJpdiI6IldXTjR1TkZYUWplbkJabVJVdWptMmc9PSIsInZhbHVlIjoiR2IrNGJ4VXQ1TzI1RzE3VVJtSmRoZnlxXC82TVlOSHEwUnpzR2o3MzIwVm5kc1hoVWVUUElRVXExanVIS0xDMkxaNHhRaGhPS1orTm5VMWNWRjB4RDlza2tuTGdcL2o2WEV1NWhJVFdxcFwveTA9IiwibWFjIjoiODlhZDQ2ZDEyMmJlMDc4MTViOTVjNGMyOTFkMDUwOTBjZGVhZDU3ZDU0NzhkMzQwNzA5ZDJhYWY5NGEwMTYxZCJ9; XSRF-TOKEN=eyJpdiI6ImZPM1lBWXdRRms1VWxQWFpBczU3NkE9PSIsInZhbHVlIjoiUHZtdVlZdnU1cGZSQXRRejMrcGIxM25oVVpYM2ZQWjV2VGF4UHROV0hlY1BzU1VUWUFcL2g4N1wvbzFvOURXSXBWcHZJY2U3aE1lZ0xZUzdEdHhmZ0RuQT09IiwibWFjIjoiZmVkNGI2M2IyODlhNTBiOTk0ODVlMmM3NjI3MzlmOTQwMTdhNTU3ZTYwMGMwZDgzMTkwNmViM2Q5M2ZkZTQ2MiJ9; laravel_session=eyJpdiI6ImRZelBqZ2x5b2VrQ1VcL3dLZFwvRzJFZz09IiwidmFsdWUiOiJVU1hNa2NDdmdiZXQ4Yis1dklNc0ZnOVp6SEFKcVVYK216WEluYVRLTVBrWVdIRm80c3NidEFXQVNUUmFoMUsrQUlMcFRGbGlyYXBrclE3cmJmb2Fldz09IiwibWFjIjoiNGIzYjg2MWMxYjBhYmMyNjhhZWI1NDIxNmIxOGYzYTFhYzkwNTM2OTA0YjdkZGFhYWNiNjg2ZDgwNmNkNDE3OSJ9',
        'Host': 'qcxypf.primecloud.cn',
        'Referer': 'http://qcxypf.primecloud.cn/resource',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36',
        'X-CSRF-TOKEN': 'GwD1UcEp5ZL6UXlvijSm4TlqFZ2ssrnWpjQGgbnx',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

const server = http.createServer((request, response) => {
    http.get(options, (res) => { //请求的接口所在页面需登录才能访问，所以需要options的方式
        const { statusCode } = res

        let error
        if(statusCode != 200){
            error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`)
        }
        if(error){
            console.error(error.message) //new Error时传入的字符串
            res.resume() //将res缓存清除
            return
        }

        res.setEncoding('utf8'); //不写则会返回buffer
        let rawData = ''
        res.on('data', (chunk) => {
            rawData += chunk
        })
        res.on('end', () => {
            try{
                console.log(rawData)
                response.writeHead(200, { 'content-type': 'text/plain' })
                response.write(rawData)
                response.end()
            }catch(e){
                console.error(e.message)
            }
        })
        
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`)
    })
})
server.listen(9527)