const express = require('express');
const app = express();
<<<<<<< HEAD
const errorHandler = require('./error-handler');
const images = require('./routes/route');

app.use('/images', images);
app.use(errorHandler);
=======
const bodyParser = require('body-parser').json();

const Image = require('./models/image');

app.get('/images', (req, res, next) => {
  let query = {};
  if (req.query) query = req.query;
  Image.find(query)
    .lean()
    .then((images) => {
      res.send(images);
    })
    .catch((err) => {
      next(err);
    });
});

app.get('/images/:id', (req, res, next) => {
  Image.findById(req.params.id)
    .then((image) => {
      if (image) res.send(image);
      else next({ code: 404, error: 'Not found' });
    })
    .catch(next);
});

app.post('/images', bodyParser, (req, res, next) => {
  new Image(req.body).save()
    .then((saved_img) => { res.send(saved_img); })
    .catch(next);
});

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const code = err.code || 500;
  const error = (err.code === 500) ? 'Internal server error': err.error;
  res.status(code).send({ error });
});
>>>>>>> a46e343aeceb9a7d24f0167f11a6867036e4c4ff

module.exports = app;