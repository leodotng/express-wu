var express = require('express')
var app = express()

app.get('/', function (req, res) {
res.send('Hi Practice 4')
})

app.listen(3000, function () {
  console.log('Success Practice 4')

})
