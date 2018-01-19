const express = require("express");
const logger = require("morgan");
const errorhandler = require("errorhandler");
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.get('/', (req, res)=>{
  res.send('hello world')
})

app.listen(3000, () => console.log('RESTful blog api app listening on port 3000!'))
