const express = require('express');
const app = express();
<<<<<<< HEAD
const errorHandler = require('./error-handler');
const images = require('./routes/route');
=======
const images = require('./routes/images');
const errorHandler = require ('./error-handler');
>>>>>>> c605e3ce2b8b535998f6431894a2d0511c404893

app.use('/images', images);
app.use(errorHandler);

module.exports = app;