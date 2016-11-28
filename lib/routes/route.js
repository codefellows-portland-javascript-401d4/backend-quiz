const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/model');

router
    .get('/', (req, res, next) => {
        Image.find({})
            .lean()
            .then(data => res.send(data))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Image.findById(req.params.id)
            .lean()
            .then(data => res.send(data))
            .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
        new Image(req.body).save()
            .then(saved => res.send(saved))
            .catch(next);
    });

module.exports = router;