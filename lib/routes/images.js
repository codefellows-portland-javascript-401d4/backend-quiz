const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');


router
  .get('/', (req, res, next) => {
    if (req.query.category) {
      let cat = req.query.category;
      Image.find({category: cat}, '_id title category')
      .then(images => res.send(images))
      .catch(next);
    } else {
      Image.find({}, '_id title category')
        .then(images => res.send(images))
        .catch(next);
    }
  })

  .get('/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .then(img => res.send(img))
      .catch(err => {
        next({
          code: 404,
          error: 'Image not found.'
        });
      });
  })

  .get('/')

  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(newImg => res.send({ _id: newImg._id, title: newImg.title, category: newImg.category }))
      .catch(next);
  });

module.exports = router;