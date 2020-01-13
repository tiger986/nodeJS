//提交表单

const querystring = require('querystring')
const https = require('https')

const postData = querystring.stringify({
    address: '北京昌平区沙杨路18号',
    latitude: '45.3655332323',
    longitude: '160.454545454545',
    message: '转让一件宝贝',
    contact: '沙河',
    type: 'sell'
})

const options = {
    hostname: 'ik9nkddr.qcloud.la',
    port: 443,
    path: '/index.php/trade/add_item',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'content-length': Buffer.byteLength(postData)
    },
    method: 'POST'
}

const req = https.request(options, (res) => {
    let chunkData = ''
    res.on('data', (chunk) => {
        chunkData += chunk
    })
    res.on('end', () => {
        console.log(chunkData)
    })
})
req.on('error', (err) => {
    console.log(err)
})
req.write(postData)
req.end()


//将以上提交表单代码做循环，则会不停的做表单提交