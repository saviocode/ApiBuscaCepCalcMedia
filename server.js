const express = require('express');
const logger = require('./src/log/logger');

const app = express()

app.use(express.json());
app.use(logger)
require('./src')(app)

app.listen(7000, ()=>{
console.log('Server started on port 7000!!')
})