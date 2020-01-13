//1.url解析成对象(uel.parse)

// const url = require('url')
// const urlObj = url.parse('http://www.gp6.com:4000/api/list?id=1&name=genzhu#fdrag=0')
// console.log(urlObj)
// console.log(urlObj.hash)
//console.log(urlObj.query)

// const { URL } = require('url')
// const urlObj = new URL('http://www.gp6.com:4000/api/list?id=1&name=genzhu#fdrag=0')
// console.log(urlObj)
// console.log(urlObj.searchParams.id)

// const { URL, URLSearchParams } = require('url')
// const urlObj = new URL('http://www.gp6.com:4000/api/list?id=1&name=genzhu#fdrag=0')
// const urlParams = new URLSearchParams(urlObj.searchParams)
// console.log(urlParams.get('id'))
// urlParams.append('age', 18)
// console.log(urlParams.get('age'))

// const url = require('url')
// const urlObj = url.parse('http://www.gp6.com:4000/api/list?id=1&name=genzhu#fdrag=0', true)
// console.log(urlObj.query)
// console.log(urlObj.query.id)

// const url = require('url')
// //const urlObj = url.parse('//www.gp6.com:4000/api/list?id=1&name=genzhu#fdrag=0', true)
// const urlObj = url.parse('//www.gp6.com:4000/api/list?id=1&name=genzhu#fdrag=0', true, true) //解析CDN格式的url
// console.log(urlObj)


//2.对象格式化成url(url.format)
// const url = require('url')
// // const urlObj = url.parse('http://www.gp6.com:4000/api/list?id=1&name=genzhu#fdrag=0')
// // console.log(urlObj)
// const urlString = url.format({
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.gp6.com:4000',
//     port: '4000',
//     hostname: 'www.gp6.com',
//     hash: '#fdrag=0',
//     search: '?id=1&name=genzhu',
//     query: 'id=1&name=genzhu',
//     pathname: '/api/list',
//     path: '/api/list?id=1&name=genzhu',
//     href: 'http://www.gp6.com:4000/api/list?id=1&name=genzhu#fdrag=0' })
// console.log(urlString)


//3.url参数替换(url.resolve)
const url = require('url')
const urlString1 = url.resolve('http://www.gp6.com', 'one')
const urlString2 = url.resolve('http://www.gp6.com/api/list/more', 'one')
const urlString3 = url.resolve('http://www.gp6.com/api/list/more', '/one')
const urlString4 = url.resolve('http://www.gp6.com/api/list/more', '../one')
console.log(urlString1)
console.log(urlString2)
console.log(urlString3)
console.log(urlString4)

