//后端的MVC/RMVC (routes/signinRouter.js,models/signinModel.js,views/signin.art,controllers/signinController.js)

const express = require('express')
const signin = require('./routes/signinRouter.js')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) 

app.use('/api', signin)

app.listen(9527, 'localhost', () => {
    console.log('localhost:9527/api/signin')
})