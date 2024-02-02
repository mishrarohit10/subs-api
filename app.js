const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect();
const db = mongoose.connection

db.on('error', (error) => {
    console.error(error);
});

db.once('open', () => {
    console.log('Connected to Database');
});

app.listen(3000, () =>{
    console.log('Server Started at port 3000')
});
