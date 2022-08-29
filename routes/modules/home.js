const express = require('express')
const router = express.Router()

const User = require('../../models/user')
const loginAttempt = require('../../public/myData/loginAttempt')

router.get('/', (req, res) => {
  if (req.session.email) {
    return User.findOne({ email: req.session.email })
      .lean()
      .then(user => {
        const firstName = user.firstName
        res.render('home', { firstName })
      })
  } else {
    res.redirect('login', { loginAttempt })
  }
})

module.exports = router
