const express = require('express')
const app = express()

app.use('/app/sms', require('./route/sms.route'))

app.listen(8000)
console.log("Server start with 8000")
