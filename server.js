const express = require('express')
const amqp = require('amqplib')
require('dotenv').config()

const errorHandler = require('./middleware/errorHandler')
const db = require('./model/config')

const app = express()
const PORT = process.env.PORT || 3030

//importing routes
const authRouter = require('./routes/authRoute')

app.use(express.json())

db.connect()

app.use('/auth', authRouter)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})