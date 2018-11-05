const express = require('express');
const app = express();
<<<<<<< HEAD
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
=======
const morgan = require('morgan')

const router = require('./routes');
const errorHandler = require('./error-handler');

app.use(morgan('dev'));

app.use('/api', router);

>>>>>>> 063165c9b04e651970de07b9d0597c5377db308f
app.use(errorHandler);

module.exports = app;