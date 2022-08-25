const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/users')
const db = mongoose.connection

const User = require('../user')
const userInfo = require('../../public/myData/userInfo')

db.on('error', (error) => {
  console.log(error)
})

db.once('open', () => {
  User.create(userInfo)
  console.log(`mongodb is running!`)
})
