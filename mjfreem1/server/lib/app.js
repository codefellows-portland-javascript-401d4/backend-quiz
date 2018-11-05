const express = require('express');
const app = module.exports = express();

const images = require('../routes/images');
app.use('/images', images);

app.use((err, req, res, next) => { //eslint-disable-line
  console.log(err);
  res.status(err.code || 500);
  res.json(err.message || 'there was an error');
});
