const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

chai.use(chaiHttp);

describe('end to end tests for images', () => {

    const request = chai.request(app);

    const postedImage = {
        title: 'whatever',
        description: 'whatever',
        category: 'animals',
        url: 'whatever'
    };

    before(done => {
        const drop = () => connection.db.dropDatabase(done);
        if(connection.readyState === 1) drop();
        else connection.on('open', drop);
    });

    it('posts an image', done => {
        request
            .post('/images')
            .send(postedImage)
            .then(res => {
                assert.isOk(res.body);
                postedImage._id = res.body._id;
                postedImage.__v = res.body.__v;
                done();
            })
            .catch(done);
    });

    it('gets an image using an id', done => {
        request
            .get(`/images/${postedImage._id}`)
            .then(res => {
                assert.equal(res.body.title, postedImage.title);
                assert.equal(res.body.description, postedImage.description);
                assert.equal(res.body.category, postedImage.category);
                assert.equal(res.body.url, postedImage.url);
                done();
            })
            .catch(done);
    });
});