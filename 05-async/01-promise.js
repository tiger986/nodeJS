//1.简单的promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved!')
    }, 1000)
}).then((result) => {
    console.log(result)
})


//2.Promise.all()
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 resolved!')
    },1000)
}).then((result) => {
    console.log(result)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 resolved!')
    },1000)
}).then((result) => {
    console.log(result)
})

Promise.all([p1, p2]).then(() => { //p1,p2全部执行结束后，再调用Promise.all后面的then
    console.log('done')
})


//3.Promise.race()
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3 resolved!')
    }, 2000)
}).then((result) => {
    console.log(result)
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p4 resolved!')
    }, 1200)
}).then((result) => {
    console.log(result)
})

Promise.race([p3, p4]).then(() => { //p3,p4有一个执行完，则调用Promise.race后面的then(谁先执行结束，则由谁来调用then)
    console.log('done2')
})