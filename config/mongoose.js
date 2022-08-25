const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/users')
const db = mongoose.connection

db.on('error', error => {
  console.log(error)
})

db.once('open', () => {
  console.log(`mongodb is running!`)
})

module.exports = db
