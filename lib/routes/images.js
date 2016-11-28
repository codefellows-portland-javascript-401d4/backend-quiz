const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
    .post('/', bodyParser, (req, res, next) => {
        
        //TODO: validate req.body
        new Image(req.body).save()
        .then(saved => res.send(saved))
        .catch(next);
    })
    .get('/', (req, res, next) => {
        Image.find({}, {title: true, category: true})
        .lean()
        .then(images => res.send(images))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Image.findById(req.params.id, {_id: true, title: true, category: true, description: true, url: true})
        .then(image => res.send(image))
        .catch(next);
    });


module.exports = router;