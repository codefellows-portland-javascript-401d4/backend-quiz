const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/model');

router
    .get('/', (req, res, next) => {
        Image.find({})
            .lean()
            .select('_id title category')
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
        if (req.body.category === 'animals' || req.body.category === 'food' || req.body.category === 'places') {
            new Image(req.body).save()
                .then(saved => res.send(saved))
                .catch(next);
        } else {
            return next({
                code: 400,
                error: 'category must be animals, places or food'
            });
        }
    });

module.exports = router;