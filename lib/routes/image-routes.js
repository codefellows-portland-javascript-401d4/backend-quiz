const express = require('express');
const bodyParser = require('body-parser').json();
const router = express.Router();

const Images = require('../models/images-schema');

router
  .post('/images', bodyParser, (req, res, next) => {
    new Images(req.body).save()
      .then(saved => res.send(saved))
      .catch(next);
  })

  .get('/images', (req, res, next) => {
    Images.find()
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/images/:id', (req, res, next) => {
    const imagesId = req.params.id;
    Promise
      .all([
        Images.findById(imagesId).lean(),
        
      ])
  });

module.exports = router;
