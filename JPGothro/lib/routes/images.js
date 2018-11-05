
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();

const Image = require('../models/image');

router
    .get('/', (req, res, next) => {
        const query = {};
        let searchCat = req.query.category;
        // if (searchCat) {
        //     query.category = ;
        // };        
        Image.find(query)
            .select('_id title category')
            .lean()
            .then(images => res.send(images))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Image.findById(req.params.id)
            .select('_id title category description url')
            .lean()
            .then(image => {
                if (!image) throw {code: 404, error: 'Image does not exist'};
                res.send(image)
            })
            .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
        new Image(req.body)
            .save({new: true})
            .then(savedImg => {
                if(!savedImg || error) throw {code: 400, error: 'Validation error'};
                res.send(savedImg)
            })
            .catch(next);
    });

module.exports = router;
