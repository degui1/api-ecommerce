const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const cors = require('cors')
require('dotenv').config()


const port = process.env.PORT


const mongoUrl = process.env.DATABASE_URL
mongoose.set('strictQuery', false)

mongoose.connect(mongoUrl);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database connected')
})


const app = express();
routes(app)


app.use(express.json());


app.listen(process.env.PORT, () => {
    console.log(`server started at ${port}`)
})

module.exports = app


