const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/users')
const db = mongoose.connection

const User = require('./models/user')
const { count } = require('./models/user')

db.on('error', error => {
  console.log(error)
})

db.once('open', () => {
  console.log(`mongodb is running!`)
})

let email = ''
let loginFailed = false

app.get('/', (req, res) => {
  res.render('login', { loginFailed, email })
})

app.post('/login', (req, res) => {
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

app.listen(port, () => {
  console.log(`localhost:${port} is running!`)
})
