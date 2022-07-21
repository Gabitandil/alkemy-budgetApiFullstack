const express = require('express');
const cors = require('cors')
const app = express()
const apiRouter = require('./api')
//Config DB
require('./config/db')

// Cors
app.use(cors())

//Body parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Route
app.use('/', apiRouter)


app.listen(3001, console.log('Listening server on port 3001'))






