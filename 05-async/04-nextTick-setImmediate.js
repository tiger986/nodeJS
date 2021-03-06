//延迟执行

//1.process.nextTick比setImmeiate的执行优先级高。前者属于idle观察者，在事件轮询之前执行；后者属于check观察者，在事件轮询之后执行
process.nextTick(function(){
    console.log('nextTick延迟A');
})
process.nextTick(function(){
    console.log('nextTick延迟B');
    setImmediate(function(){
        console.log('setImmediate延迟C');
    })
    process.nextTick(function(){
        console.log('nextTick延迟D')
    })
})
setImmediate(function(){
    console.log("setImmediate延迟E");
    process.nextTick(function(){
        console.log('强势插入F');
    })
    setImmediate(function(){
        console.log('setImmediate延迟G')
    })
})
setImmediate(function(){
    console.log('setImmediate延迟H');
    process.nextTick(function(){
        console.log('强势插入I');
    })
    process.nextTick(function(){
        console.log('强势插入J');
    })
    setImmediate(function(){
        console.log('setImmediate延迟K')
    })
})
console.log('正常执行L')