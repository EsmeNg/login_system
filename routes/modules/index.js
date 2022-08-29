const express = require('express')
const router = express.Router()

const User = require('../../models/user')
const loginAttempt = require('../../public/myData/loginAttempt')

router.post('/', (req, res) => {
  loginAttempt.email = req.body.email
  return User.findOne(req.body)
    .lean()
    .then(user => {
      if (user === null) {
        loginAttempt.loginStatus.failed = true
        return res.redirect('/')
      }
      const firstName = user.firstName
      res.render('index', { firstName, loginAttempt })
    })
    .catch(error => console.log(error))
})

module.exports = router
