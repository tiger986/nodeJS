const express = require('express')

const router = express.Router()

router.get('/index', (req, res) => {
    res.send('index')
})

module.exports = router