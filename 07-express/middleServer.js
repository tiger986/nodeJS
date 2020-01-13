//1.express是一个自身功能极简的，完全是由路由和中间件构成的web开发框架，从本质上说一个express应用就是调用各种中间件

//2.中间件就是一个函数，它可以拿到请求对象request、响应对象response、web应用中处于请求-响应循环流程中的next

//3.中间件的功能包括：执行任何代码、修改请求和响应对象、终结请求-响应循环、调用堆栈中的下一个中间件
//如果当前中间件没有终结请求-响应循环，则必须调用next()方法将控制权交给下一个中间件，否则请求就会挂起

//4.中间件分类：应用级中间件、路由级中间件、错误处理中间件、内置中间件、第三方中间件

const express = require('express')
const router = require('./routes/middleRouter')

const app = express()

//路由级中间件
app.use('/', router) //正常的路由


//应用级中间件
// app.use((req, res, next) => { //中间件(next不用可不传)
//     res.send('abc')
// })

// app.use('/midd', (req, res, next) => { //带路径的中间件(next不用可不传)
//     res.send('abc')
// })

// app.use( //中间件栈(也可带路径)(next不用可不传)
//     (req, res, next) => {
//         console.log(1)
//         //res.send('abc')
//         if(true){
//             next()
//         }else{
//             res.send('error')
//         }        
//     },
//     (req, res, next) => {
//         console.log(2)
//         res.send('def')
//     }
// )


//错误处理中间件
app.use((req, res) => { //抛出一个错误
    throw new Error('后台程序出错了！')
})

app.use((err, req, res, next) => { //错误处理中间件(参数next必传，四个参数缺一不可)
    //console.error(err.stack)
    console.error(err.message) //后台程序出错了！
    res.status(404).send('Something broke!') //res.status()给浏览器提供错误状态码
})



app.listen(8000, 'localhost', () => {
    console.log('localhost:8000')
})