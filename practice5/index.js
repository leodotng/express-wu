var express = require('express')
var app = express()
app.get('/', function(req, res) {
  res.send('Hi Practice 5');
})
  app.listen(3000, function () {
    console.log('Success practice 5')

  })
