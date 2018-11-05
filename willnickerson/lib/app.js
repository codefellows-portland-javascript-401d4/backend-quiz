const express = require('express');
const app = express();
<<<<<<< HEAD
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);

module.exports = app;
=======
const images = require('./routes/images');
const errorHandler = require('./error-handler');

app.get('/', (req, res) => {
  res.send('Basic server working');
});

app.use('/images', images);

app.use(errorHandler);

module.exports = app;
>>>>>>> e3f0f3062577238796b53f09ce241ae602b88c33
