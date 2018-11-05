const express = require('express');
const app = express();
<<<<<<< HEAD
const errorHandler = require('./error-handler');
const images = require('./routes/route');

=======
const morgan = require('morgan');
const errorHandler = require('./error-handler');
const images = require('./routes/images');

app.use(morgan('dev'));
>>>>>>> 2b788263898ad56d5c57ac57071f20578e82ffdf
app.use('/images', images);
app.use(errorHandler);

module.exports = app;