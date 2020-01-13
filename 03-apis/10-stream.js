//流的操作

//1.流的读写
const fs = require('fs')
const readStream = fs.createReadStream('./logs2.1/11.txt')
const writeStream = fs.createWriteStream('./logs2.1/22.txt')

var chunkData = ''
readStream.on('data', (chunk) => {
    chunkData += chunk
    writeStream.write(chunk)
})
readStream.on('end', () => {
    console.log(chunkData)
})
readStream.on('error', (err) => {
    console.log(err)
})

//readStream.pipe(writeStream); //与以上代码结果一样，只是这是将一个文件的内容读完后，再整体写入另一个文件


//2.读流并压缩,再写入另一个文件
const zlib = require('zlib')

const gzip = zlib.createGzip()
const inp = fs.createReadStream('./logs2.1/11.txt')
const out = fs.createWriteStream('./logs2.1/11.txt.gz')
inp
    .pipe(gzip)
    .pipe(out)
