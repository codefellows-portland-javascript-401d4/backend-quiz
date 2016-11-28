const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');


router
  .get('/', (req, res, next) => {
    Image.find({}, '_id title category')
      .then(images => res.send(images))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .then(img => res.send(img))
      .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(newImg => res.send({ _id: newImg._id, title: newImg.title, category: newImg.category }))
      .catch(next);
  });

module.exports = router;