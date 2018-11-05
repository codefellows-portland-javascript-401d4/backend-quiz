const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image-model');

router
    .get('/', (req, res, next) => {
        const query = {};
        if(req.query.title) query.title = req.query.title;
        Image.find(query)
            .then(images => res.send(images))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Image.findById(req.params.id)
            .then(images => res.send(images))
            .catch(next);
    })

    .get('/category', (req, res, next) => {
        Image.find({category: req.params.category})
            .then(images => res.send(images))
            .catch(next);
    })

    .post('/', bodyParser, (req,res,next) => {
        new Image(req.body).save()
            .then(saved => res.send(saved))
            .catch(next);
    });

module.exports = router;