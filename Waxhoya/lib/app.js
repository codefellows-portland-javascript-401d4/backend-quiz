const express = require('express');
const app = express();
<<<<<<< HEAD
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);
=======
const imageRoutes = require('./routes');


app.use('/', imageRoutes);
>>>>>>> f3ca5451b5189095b3ab1531934936464c385255

module.exports = app;