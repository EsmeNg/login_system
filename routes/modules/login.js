const express = require('express')
const router = express.Router()
const loginAttempt = require('../../public/myData/loginAttempt')

router.get('/', (req, res) => {
  res.render('login', { loginAttempt })
})

module.exports = router
