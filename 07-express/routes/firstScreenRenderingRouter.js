//首屏渲染（在后端渲染好页面，再放到前端）

const express = require('express')
const firstScreenRenderingCon = require('../controllers/firstScreenRenderingController.js')

const router = express.Router()

router.get('/', firstScreenRenderingCon.fun)

module.exports = router