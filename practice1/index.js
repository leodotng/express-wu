var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hi Practice 1')
})

app.listen(3000, function () {
  console.log('success in console')
})
