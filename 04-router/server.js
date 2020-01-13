//1.简单路由
const http = require('http')

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'content-type': 'text/html'
//     })
//     switch(req.url){
//         case '/index':
//         res.end('index');
//         break;
//     default:
//         res.end('ok');
//     }
// }).listen(9527, 'localhost', () => {
//     console.log('server is running at localhost:9527')
// })

const fs = require('fs')
http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    switch(req.url){
        case '/home':
        fs.readFile('./views/home.html', 'utf8', (err, data) => {
            res.end(data)
        })
        break;
        case '/home.js':
        fs.readFile('./views/home.js', 'utf8', (err, data) => {
            res.end(data)
        })
        break;
        case '/home.jpg':
        fs.readFile('./views/home.jpg', (err, data) => {
            res.end(data)
        })
        break;
    default:
        res.end('404')
    }
}).listen(9527, 'localhost', () => {
    console.log('server is running at localhost:9527')
})