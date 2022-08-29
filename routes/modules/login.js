const express = require('express')
const router = express.Router()

const User = require('../../models/user')
const loginAttempt = require('../../public/myData/loginAttempt')

router.get('/', (req, res) => {
  res.render('login', { loginAttempt })
})

router.post('/', (req, res) => {
  loginAttempt.email = req.body.email
  return User.findOne(req.body)
    .lean()
    .then(user => {
      if (user) {
        Object.assign(req.session, req.body)
        res.redirect('/')
      } else {
        loginAttempt.loginStatus.failed = true
      }
    })
    .catch(error => console.log(error))
})


module.exports = router
