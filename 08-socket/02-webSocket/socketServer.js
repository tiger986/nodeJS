const webSocket = require('ws') //需安装模块（yarn add ws）

const ws = new webSocket.Server({
    port: 9527
})

let clients = {}
let clientName = 0

ws.on('connection', (client) => {
    client.name = ++clientName
    clients[client.name] = client

    client.on('message', (msg) => {
       //console.log('客户端传来的数据：' + msg)
       broadcast(client, msg)
    })

    client.on('close', () => {
       delete clients[client.name]
       console.log(client.named + '离开了~')
    })
})

function broadcast( client, msg){
    for(var key in clients){
        clients[key].send(client.name + '说' + msg)
    }
}