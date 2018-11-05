const express = require('express');
const app = express();
<<<<<<< HEAD
const errorHandler = require('./error-handler');
const images = require('./routes/route');
=======
const errorHandler = require('./errorHandler');
const images = require('./routes/images');
>>>>>>> 3298953f6afb3ff3f27fbfe14f9229985dfb86f2

app.use('/images', images);
app.use(errorHandler);

module.exports = app;