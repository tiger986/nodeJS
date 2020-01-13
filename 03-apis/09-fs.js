//操作文件

//1.向文件写入内容(目录中找到文件则直接写入，找不到则先创建再写入，但此方法不能连同文件夹一起创建)
const fs = require('fs')

//异步（默认）
fs.writeFile('logs/log.txt', 'hello', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('写入成功！')
    }
})
console.log('done1')

//同步
fs.writeFileSync('logs/log2.txt', '你好')
console.log('done2')


//2.向已有文件追加内容
fs.appendFile('logs/log.txt', '\nworld', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('append succ')
    }
})


//3.读取文件
fs.readFile('logs/log.txt', (err, data) => { //fs.readFile('logs/log.txt','utf8', (err, data) => {
    if(err){
        console.log(err)
    }else{
        //console.log(data)
        console.log(data.toString())
    }
})


//4.获取文件信息
fs.stat('logs/log.txt', (err, msg) => {
    if(err){
        console.log(err)
    }else{
        console.log(msg)
    }
})


//5.删除文件
fs.unlink('logs/log2.txt', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('文件删除成功')
    }
})


//6.创建文件夹并在其中创建文件写上内容
fs.mkdir('./logs3',(err) => {
    if(err){
        console.log(err)
    }else{
        for(var i = 0; i < 5; i++){
            fs.writeFile(`./logs3/file${i}.txt`, `hello${i}\n`, (err) => {
                if(err){
                    console.log(err)
                }else{
                    console.log('OK')
                }
            })
        }
    }
})


//7.读取文件夹，并将其中所有的文件的内容打印出来
fs.readdir('./logs3', (err, files) => {
    if(err){
        console.log(err)
    }else{
        files.forEach((item, index) => {
            let fileUrl = `./logs3/${item}`
            fs.stat(fileUrl, (err, stats) => {
                if(err){
                    console.log(err)
                }else{
                    //console.log(stats.isFile()) //是否为文件
                    //console.log(stats.isDirectory()) //是否为文件夹
                    if(stats.isFile()){
                        fs.readFile(fileUrl, 'utf8', (err, data) => {
                            console.log(data)
                        })
                    }
                }
            })
        })
    }
})


//8.修改文件或文件夹的名字
fs.rename('./logs2', 'logs2.1', () => {
    console.log('修改成功')
})


//删除文件夹
//删除文件夹前需保证文件夹为空，否则就不能被删除
fs.readdir('./logs4', (err, files) => {
    if(err){
        console.log(err)
    }else{
        files.forEach((item, index) => {
            fs.unlink('./logs4/' + item, (err) => {
                if(err){
                    console.log(err)
                }else{
                    //
                }
            })
        })
    }
})
fs.rmdir('./logs4', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('文件夹删除成功')
    }
})


//监听文件内容变化
fs.watchFile('./logs2.1/11.txt', {interval: 1000}, (curr, prev) => {
    console.log(curr.size)
    console.log(prev.size)
})
setTimeout(() => {
    fs.appendFile('./logs2.1/11.txt', 'def', (err) => {
        if(err){
            console.log(err)
        }else{
            console.log('OK')
        }
    })
}, 2000)