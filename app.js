const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/users')
const db = mongoose.connection

db.on('error', (error) => {
  console.log(error)
})

db.once('open', () => {
  console.log(`mongodb is running!`)
})

app.get('/', (req, res) => {
  res.render('login')
})

app.listen(port, () => {
  console.log(`localhost:${port} is running!`)
})
