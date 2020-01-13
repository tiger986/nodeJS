//事件注册、触发和删除

const EventEmmiter = require('events')

class myEmmiter extends EventEmmiter {} 
const evt = new myEmmiter()

evt.on('play', function(name){
    console.log(name)
})

evt.emit('play', 'gaohengliang')
evt.emit('play', 'chenyanhong')

//只触发一次
evt.once('play2', function(num){
    console.log(num)
})
evt.emit('play2', '20')
evt.emit('play2', '18')

//删除部分或全部事件
evt.on('play3', function(str){
    console.log(str)
})
//evt.removeAllListeners(['play']) //部分
evt.removeAllListeners()  //全部
evt.emit('play', 'gaogaogao')
evt.emit('play3', 'sssssss')

//删除某个事件
const callback = (str) => { //被删除事件的回调需单独申明，即removeListener时需拿到回调函数的引用而不是该函数本身
    console.log(str)
}
evt.on('play4', callback)
evt.emit('play4', 'eeeeeeeee')
evt.removeListener('play4', callback)
evt.emit('play4', 'eeeeeeeee')

