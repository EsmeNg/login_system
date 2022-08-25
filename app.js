const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

const routes = require('./routes')
app.use(routes)

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/users')
const db = mongoose.connection

db.on('error', error => {
  console.log(error)
})

db.once('open', () => {
  console.log(`mongodb is running!`)
})

let email = ''
let loginFailed = false

app.listen(port, () => {
  console.log(`localhost:${port} is running!`)
})
