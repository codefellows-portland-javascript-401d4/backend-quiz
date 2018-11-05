const express = require('express');
const app = express();
<<<<<<< HEAD
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);
=======
const morgan  = require('morgan');

const images = require('./routes/images');

app.use(morgan('dev'));


app.use('/images', images); 

app.use((err, req, res, next) => { //eslint-disable-line no-unused-vars
    const code = err.code || 500;
    const error = (err.code === 500) ? 'Internal server error' : err.error;

    res.status(code).send({error});
});
>>>>>>> 60f848b30a79db6bfe6ef5772cacc36b3192206b

module.exports = app;