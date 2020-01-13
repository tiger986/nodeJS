//1.一个简单的generator
function* gen(){
    yield 'hello'
    yield 'world'
    return 'done1'
}

const g = gen()

console.log(g.next())  //{ value: 'hello', done: false }
console.log(g.next())  //{ value: 'world', done: false }
console.log(g.next())  //{ value: 'done', done: true }
console.log(g.next())  //{ value: undefined, done: true }


//2.generator执行规则
function* gen2(){
    console.log('done2')
}

const g2 = gen2() //不回打印出done2
setTimeout(() => { //只有执行g2.next()，才会打印出done2
    g2.next()
},2000)


//3.for..of遍历调用generator
function* gen3(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    return 6
}

for(var v of gen3()){
    console.log(v) //1,2,3,4,5（for...of只会拿到yield后面的内容）
}


//4.用generator实现一个斐波那契数列（后一个数时前两个数的和）
function* fibonacci(){
    let [prev, curr] = [0, 1] //解构赋值
    for(;;){ //死循环(没有条件)
        yield curr; //每次yield返回curr
        [prev, curr] = [curr, prev + curr]; //后一个数时前两个数的和
    }
}

for(let n of fibonacci()){ //n就是上面函数中yield后面的curr
    if(n > 1000) break;
    console.log(n)
}
