const express = require('express');
<<<<<<< HEAD
const app = express();
const errorHandler = require('./error-handler');
const images = require('./routes/route');
=======
const images = require('./routes/images');
const errorHandler = require('./errorHandler');
const app = express();

>>>>>>> 37ca77b7cc522b2c93e985df3e042e1a5de582ea

app.use('/images', images);
app.use(errorHandler);

module.exports = app;