const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/schema.js');

router

  .get('/images', (req, res, next) => {
    const query = {};
    Image.find(query)
    .select( '_id title category' )
    .lean()
    .then(images => res.send(images))
    .catch(next);
  })

  .get('/images/:id', (req, res, next) => {
    Image.findById(req.params.id)
    .select('_id title category description url')
    .lean()
    .then(images => res.send(images))
    .catch(next);
  })

  .post('/images', bodyParser, (req, res, next) => {
    let image = new Image(req.body); 
    return image.save()
    .then(saved => res.send(saved))
    .catch(next);
  });

  module.exports = router;