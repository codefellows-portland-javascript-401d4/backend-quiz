const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    const query = {};

    if(req.query.category) {
      console.log(req.query.category);
      query.category = req.query.category;
    }

    Image.find(query)
      .select('title description category url')
      .lean()
      .then(images => res.send(images))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .select('title description category url')
      .lean()
      .then(image => res.send(image))
      .catch(next);
  })
  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  });

module.exports = router;
