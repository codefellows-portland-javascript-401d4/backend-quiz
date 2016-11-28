const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const ImageUpload = require('./imageSchema')


router
    .post('/images', bodyParser, (req, res, next) => {
        new ImageUpload (req.body).save()
            .then(newImage => res.send(newImage))
            .catch(next)
    })