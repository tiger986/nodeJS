//1.一个简单的async-await
const foo = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done1')
        }, 1000)
    })
}
const async = async () => {
    console.log(await foo())
}
async()
