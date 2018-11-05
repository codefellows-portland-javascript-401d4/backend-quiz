const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
<<<<<<< HEAD
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);

module.exports = app;
=======

const images = require('./routes/images');

app.use('/api/images', images);

app.use(errorHandler);

module.exports = app;



>>>>>>> 8baec268884e7a8dd86daf82c6b89b3b4725dc13
