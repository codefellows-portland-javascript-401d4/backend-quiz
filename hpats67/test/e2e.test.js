const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('imageserver api', () => {
    
    const request = chai.request(app);

    const monkey = {
        title: 'yahoo',
        category: 'animals',
        description: 'a monkey',
        url: 'https://s-media-cache-ak0.pinimg.com/236x/0f/e7/c0/0fe7c0dbfddf9060f9be91dd00d6831f.jpg'
    };

    it('/POST and /GET an image', done => {
        request
            .post('/images')
            .send(monkey)
            .then(res => {
                const image = res.body;
                request
                    .get(`/images/${image._id}`)
                    .then(res => {
                        assert.equal(res.body.title, monkey.title);
                        assert.equal(res.body.category, monkey.category);
                        assert.equal(res.body.description, monkey.description);
                        assert.equal(res.body.url, monkey.url);
                        done();
                    });
            })
            .catch(done);
    });

});