require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
 const reviewRoutes = require('./routes/reviews.routes');
const mongoose = require('mongoose');

const {DATABASE_URL} = process.env

// create express instance
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/reviews/', reviewRoutes);


// run the server
const {PORT, START_UP_MESSAGE} = process.env

mongoose.connect(DATABASE_URL, { useNewUrlParser: true }).then(
    res => {
        app.listen(PORT, ()=> console.log(`${START_UP_MESSAGE} ${PORT}`));
    }
).catch(error => {
    console.log('An Error Happened', error)
})
