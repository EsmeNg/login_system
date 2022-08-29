const express = require('express')
const User = require('../../models/user')
const router = express.Router()
const loginAttempt = require('../../public/myData/loginAttempt')

router.get('/', (req, res) => {
  req.session.email = null
  req.session.password = null
  res.redirect('/login')
})

module.exports = router
