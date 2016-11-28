const express = require('express');
const app = express();

// const errorHandler = require('./error_handler');

// const Image = require('./models/image');

const images = require('./routes/images');

app.use('/api/images', images);


// app.use(errorHandler);

module.exports = app;
