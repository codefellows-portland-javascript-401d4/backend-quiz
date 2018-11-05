const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
<<<<<<< HEAD
const images = require('./routes/route');

app.use('/images', images);
=======

const imgs = require('./routes/imgs');

app.use('/images', imgs);
>>>>>>> 4dada106c578a0c8e8db797125f5dda814fd400d
app.use(errorHandler);

module.exports = app;