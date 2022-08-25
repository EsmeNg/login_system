const express = require('express')
const router = express.Router()

const login = require('./modules/login')
const index = require('./modules/index')

router.use('/', login)
router.use('/login', index)

module.exports = router