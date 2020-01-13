//服务端socket

const net = require('net')

const serverSocket = new net.createServer()

let clients = {}
let clientName = 0

serverSocket.on('connection', (client) => {
    client.name = ++clientName
    clients[client.name] = client

    client.on('data', (data) => {
       //console.log('客户端传来的数据：' + data)
       broadcast(client, data)
    })

    client.on('error', (err) => {
       console.log(err)
       client.end()
    })

    client.on('close', (data) => {
       delete clients[client.name]
       console.log(client.name + '下线了')
    })

    function broadcast(client, msg){
        for(var key in clients){
            if(clients.hasOwnProperty(key)){
                clients[key].write(client.name + '说：' + msg)
            }
        }
    }

})

serverSocket.listen(9527, 'localhost')