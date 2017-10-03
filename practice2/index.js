var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hi Practice 2')
})

app.listen(3000, function () {
  console.log('Success')
})
