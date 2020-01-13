//后端的MVC/RMVC (routes/signinRouter.js,models/signinModel.js,views/signin.art,controllers/signinController.js)

const express = require('express')
const signinCon = require('../controllers/signinController.js')

const router = express.Router()

router.post('/signin', signinCon.signin)

module.exports = router