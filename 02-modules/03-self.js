//引入自定义模块并使用

//const name = require('./name.js') //引入自定义模块要加路径

//console.log(name)

//name.setName('gaohengliang')
//console.log(name.getName())

//name.set("gaohengliang")
//console.log(name.get())


//可按需加载模块
const flag = 0
if(flag){
    const name = require('./name.js')
    name.set('gaohengliang')
    console.log(name.get())
}else{
    const age = require('./age.js')
    age.set(18)
    console.log(age.get())
}