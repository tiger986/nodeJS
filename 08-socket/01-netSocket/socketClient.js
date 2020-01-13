//网络上的两个程序通过一个双向通信连接实现数据的交换，这个连接的一端称为一个socket

//分类：基于net模块实现的socket、webSocket、socket.io

//客户端socket

const net = require('net')
const readline = require('readline') //用于在命令行输入信息和获取命令行输入信息

const port = 9527
const host = 'localhost'

const clientSocket = new net.Socket()
clientSocket.setEncoding = 'UTF-8'

clientSocket.connect(port, host, () => {
    clientSocket.write('hello')
})

clientSocket.on('data', (data) => {
    console.log('服务端传来的数据：' + data);
    say()
})

clientSocket.on('error', (err) => {
   console.log(err)
})

clientSocket.on('close', () => {
   console.log('connection closeed')
})

const r1 = readline.createInterface({ //创建输入
    input: process.stdin,
    output: process.stdout
})

function say(){
    r1.question('请输入：', (inputMsg) => {
        if(inputMsg != 'bbb'){
            clientSocket.write(inputMsg + '\n')
        }else{
            clientSocket.destroy() //断开连接
            r1.close() //关闭输入
        }
     })
}