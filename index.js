// install express with `npm install express`
const express = require('express')
const app = express()

app.use(express.urlencoded())
app.use(express.static(__dirname + '/public'))

// export 'app'
module.exports = app
