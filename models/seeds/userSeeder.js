const db = require('../../config/mongoose')
const User = require('../user')
const userInfo = require('../../public/myData/userInfo')

db.once('open', () => {
  User.create(userInfo)
  console.log(`mongodb is running!`)
})
