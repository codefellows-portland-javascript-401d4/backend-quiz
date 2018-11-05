const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Image = require('../models/image');

router
  .post('/', jsonParser, (req, res, next) => {
    const imageData = req.body;
    new Image(imageData).save()
      .then(savedImage => res.send(savedImage))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    let query = {};
    if(req.query) {
      query = req.query;
    }
    Image.find(query)
      .select('_id title category')
      .lean()
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const imageId = req.params.id;
    Image.findById(imageId)
      .then(image => res.send(image))
      .catch(next);
  })

  .delete('/', (req, res, next) => {
    Image.remove({})
            .then(deleted => res.send(deleted))
            .catch(next);
  });

module.exports = router;