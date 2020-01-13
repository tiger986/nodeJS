//async库的使用

//1.async.series(), 异步串行(串行并有关联)
const async = require('async') //外部模块，要先安装（yarn add cheerio）

console.time('flag')
async.series({
    one: function(callback){
        setTimeout(function(){
            callback(null, 1, 0);
        }, 200)
    },
    two: function(callback){
        setTimeout(function(){
            callback(null, 2);
        }, 100)
    }
}, function(err, results){
    console.log(results); //{noe: 1, two: 2}
    console.timeEnd('flag')  
})


//2.async.parallel(),异步并行
console.time('flag2')
async.parallel({
    A: function(callback){
        setTimeout(function(){
            callback(null, 1);
        }, 200)
    },
    B: function(callback){
        setTimeout(function(){
            callback(null, 2, 3);
        }, 100)
    }
}, function(err, results){
    console.log(results); //{B: 2, A: 1}
    console.timeEnd('flag2')  
})


//3.async.waterfall(),瀑布流(串行并有关联)
async.waterfall([
    function(callback){
        callback(null, 'aaa')
    },
    function(arg1, callback){
        callback(null, 'xxx', arg1, 'bbb')
    },
    function(arg1, arg2, arg3, callback){ //这里的参数与上一个函数的callback中所传参数一一对应
        callback(null, [arg1, arg2, arg3])
    }
], function(err, result){
    console.log(result)
})