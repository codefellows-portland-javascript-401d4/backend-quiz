const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
<<<<<<< HEAD
const images = require('./routes/route');

app.use('/images', images);
=======

const images = require('./routes/images');

app.use('/api/images', images);

>>>>>>> 594e2d8516cd3ee6018e864feca43317d1380db9
app.use(errorHandler);

module.exports = app;