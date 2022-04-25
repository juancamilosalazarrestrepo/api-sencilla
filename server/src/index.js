const express = require('express')
const app = express()



app.use('/api/user', require('./routes/user.routes'));

app.listen(3000)