const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');
const url = require('url');
const qs = require('querystring');

router
    .post('/', bodyParser, (req, res, next) => {
        const categories = ['animals', 'food', 'places'];
        const {title, description, category, url} = req.body;
        if (!title || !category || !url) {
            return next({
                code: 400,
                error: 'Missing a required field: title, category, or url'
            });
        };

        if (categories.indexOf(category.toLowerCase()) === -1) {
            return next({
                code: 400,
                error: 'Category not allowed: it must belong to either animals, food or places'
            });
        };

        Image
            .find({url})
            .count()
            .then(count => {
                if(count > 0) throw {code: 400, error: `url ${url} already exists in database`};
                const image = new Image(req.body);
                return image.save();
            })
            .then(image => {
                res.send(image);
            })
            .catch(next);

    })
    .get('/:id', bodyParser, (req, res, next) => {
        const id = req.params.id;
        Image
            .findOne({_id: id})
            .then(image => {
                res.send(image);
            })
            .catch(err => {
                console.log(err);
                next({code: 404, error: 'Image does not exist'});
            });
    })
    .get('/', bodyParser, (req, res, next) => {
        const category = qs.parse(url.parse(req.url).query);
        let newObject = {};
        if (Object.keys(category).length > 0) newObject = {category: category.category};
        Image
            .find(newObject)
            .select('_id title category')
            .then(results => {
                res.send(results || []);
            })
            .catch(next);
    });

module.exports = router;