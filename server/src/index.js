const express = require('express')
const cors= require('cors')
const app = express()


app.use(express.json());
app.use(cors());



app.use('/api/user', require('./routes/user.routes'));

app.listen(3000)