'use strict';


const express = require('express');

const app = express();


const notFoundHnalder = require('./handlers/404.js');
const errorHandler = require('./handlers/500');



app.get('/', (req, res) => {
    res.status(200).send('Hello World!, all working');
});



app.get('/data', (req, res) => {
    let output = {
        10: 'even',
        5: 'odd',
        9: 'odd',
        6: 'even',

        time: new Date().toString()
    }
    res.status(200).json(output);
});




app.get('/bad', (req, res, next) => {
    next('error from bad end point');
});



app.use('*', notFoundHnalder);

app.use(errorHandler);

function start(port) {
    app.listen(port, () => console.log(`Server started on port ${port}`));
}

module.exports = {
    start,
    app
}