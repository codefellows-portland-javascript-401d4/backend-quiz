const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
<<<<<<< HEAD
const images = require('./routes/route');

app.use('/images', images);
=======
const images = require('./routes/images');

app.use('/api/images', images);
>>>>>>> 53b5732e839980b009c1f9e78e186ed0a00f9e12
app.use(errorHandler);

module.exports = app;