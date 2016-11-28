const express = require('express');
const app = express();
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

module.exports = app;