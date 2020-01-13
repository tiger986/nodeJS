console.log('server')

const TARGET = process.env.npm_lifecycle_event //判断命令行输入的命令名(npm run 命令名)(命令名需要在package.json文件中的script里配置)

if(TARGET === 't1'){
    console.log('Running the t1 task!')
}else if(TARGET === 't2'){
    console.log('Running the t2 task!')
}else if(TARGET === 't3'){
    console.log('Running the t3 task!')
}


//process.env.npm_lifecycle_event 获取命令行输入的命令名
//process.env.npm_package_名称 获取package.json中对应名称的值(process.env.npm_package_name就可以拿到'06-npm-scripts')

console.log(process.env.npm_package_main)  //'index.js'
console.log(process.env.npm_package_scripts)  //'undefined'
console.log(process.env.npm_package_scripts_t1)  //'node server.js'
console.log(process.env.npm_package_file1) //undefined
console.log(process.env.npm_package_file1_0) //'file1.0.txt'  (数组用下划线加索引)
console.log(process.env.npm_package_file1_1) //'file1.1.txt'  (对象用下划线加键名)
console.log(process.env.npm_package_file2_a) //'aa'
console.log(process.env.npm_package_file2_b) //'bb'
