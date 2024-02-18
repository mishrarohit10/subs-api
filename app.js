const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
 
app.use(express.json())

db.on('error', (error) => {
    console.error(error);
});

db.once('open', () => {
    console.log('Connected to Database');
});

app.listen(3000, () =>{
    console.log('Server Started at port 3000')
});

const subsRouter = require('./routes/subscribers')

app.use('/',subsRouter)
