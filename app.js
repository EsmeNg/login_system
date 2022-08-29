const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

//為session而新增的程式碼
const session = require('express-session')
app.use(bodyParser.json())
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 1000 },
  })
)

app.use(express.static('public'))

const routes = require('./routes')
app.use(routes)

require('./config/mongoose')

app.listen(port, () => {
  console.log(`localhost:${port} is running!`)
})
