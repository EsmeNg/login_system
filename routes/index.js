const express = require('express')
const router = express.Router()

const login = require('./modules/login')
const home = require('./modules/home')
const logout = require('./modules/logout')

router.use('/login', login)
router.use('/', home)
router.use('/logout', logout)

module.exports = router