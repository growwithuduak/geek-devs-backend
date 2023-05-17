const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config()

//routes
const authRoute = require('./routes/auth');

//connect to db
mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("connected to MongoDb");


//middlewares
app.use(express.json())
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server running'));