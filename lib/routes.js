const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const ImageUpload = require('./imageSchema');
const qs = require('qs');
const url = require('ur');

router
    .post('/images', bodyParser, (req, res, next) => {
        new ImageUpload (req.body).save()
            .then(newImage => res.send(newImage))
            .catch(next)
    })

    .get('/images', (req, res, next) => {
        const queryString = (qs.parse(url.parse(req.url).query));
        console.log(queryString);
        let query = {};
        if (req.query.category) query.category = req.query.category;
        ImageUpload.find(query)
            .then(image => res.send(image))
            .catch(next);
    })

    .get('./images/:id', (req, res, next) => {
        ImageUpload.findByID(req.params.id)
            .then(image => res.send(image))
            .catch(next);
    })

    .get('/images/'





module.exports = router;