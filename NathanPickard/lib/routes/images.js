const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router

    .post('/images', bodyParser, (req, res, next) => {
      req.body.imageId = req.image.id;
      new Image(req.body).save()        
        if (!image) {
            throw {
              code: 400, 
              error: 'Not found'
            };
          } else {
            return res.json(image);
          }
          .then(saved => res.send(saved))
          .catch(next);
  })

    .get('/images', (req, res, next) => {
      var imageId = req.image.id.toString();
      Image.find({imageId})
        .lean()
        .then(image => {
          if (!image) {
            throw {
              code: 404, 
              error: 'Not found'
            };
          } else {
            return res.json(image);
          }
        })
        .catch(next);
  })

  .get('/images/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .then(image => {
        if (!image) {
          throw {
            code: 404, 
            error: 'Not found'
          };
        } else if (req.image.id === image.imageId.toString()) {
          return res.send(image);
        }
      })
      .catch(next);
  })

    .get('/images?category=animals', (req, res, next) => {
    Image.findById(req.params.id)
      .then(image => {
        if (!image.category === 'animals') {
          throw {
            code: 400, 
            error: 'Not found'
          };
        } else if (req.image.id === image.imageId.toString()) {
          return res.send(image);
        }
      })
      .catch(next);

    
  });