//写出后端接口，并用前端请求打印

fetch('http://localhost:9527/api/userList')
    //.then(response => res.json())
    .then(result => {
        console.log(result)
    })