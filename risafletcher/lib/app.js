const express = require('express');
const app = express();
<<<<<<< HEAD
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
=======
const img = require('./routes/img-router');
const errorHandler = require('./error-handler');

app.use('/images', img);
>>>>>>> 75ea9a132a495596cdc2068fe63e5f6b78e7c70f
app.use(errorHandler);

module.exports = app;