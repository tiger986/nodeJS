//1.get请求一个接口

const http = require('http')
const https = require('https')

// https.get('https://api.douban.com/v2/movie/in_theaters', (res) => {
//     console.log(res.statusCode)
//     console.log(res.headers['content-type'])
// })

http.get('http://qcxypf.primecloud.cn/resource/getRessels/1', (res) => {
    const { statusCode } = res
    const contentType = res.headers['content-type']

    let error
    if(statusCode != 200){
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`)
    }else if(!/^application\/json/.test(contentType)){
        error = new ErrorEvent('Invalid content-type.\n' + `Expected application/json but received $(contentType)`)
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
            const pqrsedData = JSON.parse(rawData)
            console.log(pqrsedData)
            //do something about rawData
        }catch(e){
            console.error(e.message)
        }
    })
    
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`)
})