var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('pouet')
})

app.listen(3000)
console.log("listening on port 3000")
