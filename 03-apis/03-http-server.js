//1.搭建一个server(http.createServer)

const http = require('http')
const server = http.createServer((request, response) => {
    //response.writeHead(200, { 'content-type': 'text/plain' })
    response.writeHead(200, { 'content-type': 'text/html' })
    response.write('<b>server</b>')
    response.end()
})
server.listen(9527)