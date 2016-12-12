const express = require('express');
const app = express();
const morgan  = require('morgan');

const images = require('./routes/images');

app.use(morgan('dev'));


app.use('/images', images); 

app.use((err, req, res, next) => { //eslint-disable-line no-unused-vars
    const code = err.code || 500;
    const error = (err.code === 500) ? 'Internal server error' : err.error;

    res.status(code).send({error});
});

module.exports = app;