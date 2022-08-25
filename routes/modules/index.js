const express = require('express')
const router = express.Router()

const User = require('../../models/user')

router.post('/', (req, res) => {
    email = req.body.email
    return User.findOne(req.body)
      .lean()
      .then(user => {
        if (user === null) {
          loginFailed = true
          return res.redirect('/')
        }
        const firstName = user.firstName
        res.render('index', { firstName, email })
      })
  })

module.exports = router