var express = require('express')
const cors = require('cors')
const helmet = require('helmet')
var bodyParser = require('body-parser')
require('./dbConnection')

var app = express()
app.use(cors())

app.options('*', cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(helmet())
app.use('/auth', require('./routes/auth'))
app.use('/book', require('./routes/book'))
// app.use('/users', require('./routes/users'))
app.use('/rent', require('./routes/rentedBooks'))

app.get('/', function (req, res) {
  res.send('Hello world!')
})

app.listen(5000)
