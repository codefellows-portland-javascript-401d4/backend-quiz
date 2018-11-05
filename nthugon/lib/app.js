const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
<<<<<<< HEAD
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);

module.exports = app;
=======
const morgan = require('morgan');
const images = require('./routes/images');

app.use(morgan('dev'));

app.use('/images', images);

app.use(errorHandler);

module.exports = app;
>>>>>>> 099f891bb729091df50495339348b14f5f31803e
