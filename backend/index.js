const express = require('express');
const cors = require('cors')
const app = express()

//Config DB
require('./config/db')

// Cors
app.use(cors())

//Body parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//Routes
app.use(require('./routes/routes'))


app.listen(3001, console.log('Listening server on port 3001'))






