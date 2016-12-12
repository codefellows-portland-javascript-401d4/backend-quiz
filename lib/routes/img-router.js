const express = require('express');
const router = express.Router();;
const Img = require('../models/images');
const bodyParser = require('body-parser').json();

router
  .post('/', bodyParser, (req, res, next) => {
    new Img(req.body).save()
    .then(saved => res.send(saved))
    .catch(next);
  })

  .get('/', (req, res, next) => {
    Img.find()
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Img.findById(req.params.id)
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/?category=:category', (req, res, next) => {
    Img.find()
      .where([category] === req.params.category)
      .then(images => res.send(images))
      .catch(next);
  })

module.exports = router;
