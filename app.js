const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')

//MIDDLEWARES
app.use(cors())
app.use('/', require('./routes/items'))

//start
app.listen(3000)