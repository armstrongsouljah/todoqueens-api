const express = require('express');

// initialize the exppress instance
const app = express();

// declare an endpoint
app.use('/', (req, res, next) => {
    res.send({message: 'Hello world'});
});

// start the server
app.listen(3000, () => console.log('Server is running at port: 3000 '))