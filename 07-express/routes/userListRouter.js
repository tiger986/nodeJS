//写出后端接口，并用前端请求打印

const express = require('express')
const userListCon = require('../controllers/userListController.js')

const router = express.Router()

router.get('/userList', userListCon.userList)

module.exports = router