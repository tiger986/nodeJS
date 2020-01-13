//1.将query解析成对象(querystring.parse)

// const querystring = require('querystring')
// const queryObj = querystring.parse('id=2&name=genzhu')
// console.log(queryObj)
// //const queryObj2 = querystring.parse('id=2/name=genzhu')
// const queryObj2 = querystring.parse('id=2/name=genzhu', '/') //默认分割符是&，若不是则需指定
// console.log(queryObj2)
// //const queryObj3 = querystring.parse('id:2/name:genzhu', '/')
// const queryObj3 = querystring.parse('id:2/name:genzhu', '/', ':') //默认分割符是=，若不是则需指定
// console.log(queryObj3)


//2.将对象转化为query(querystring.stringify)

// const querystring = require('querystring')
// const query1 = querystring.stringify({id:'2', name:'genzhu'})
// console.log(query1)
// const query2 = querystring.stringify({id:'2', name:'genzhu'}, '#') //默认转化后分隔符为&，若要用其他符号需指定
// console.log(query2)
// const query3 = querystring.stringify({id:'2', name:'genzhu'}, '#', '-') //默认转化后分隔符为=，若要用其他符号需指定
// console.log(query3)


//3.将query中的中文和符号解析为编码(querystring.escape)

// const querystring = require('querystring')
// const query = querystring.escape('city=北京&name=http://www.gp6.com/api/list?id=1&name=genzhu#fdrag=0')
// console.log(query)


// //3.将query中的编码解析为中文和符号(querystring.unescape)

const querystring = require('querystring')
const query = querystring.unescape('city%3D%E5%8C%97%E4%BA%AC%26name%3Dhttp%3A%2F%2Fwww.gp6.com%2Fapi%2Flist%3Fid%3D1%26name%3Dgenzhu%23fdrag%3D0')
console.log(query)