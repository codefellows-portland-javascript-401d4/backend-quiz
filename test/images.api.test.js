const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

chai.use(chaiHttp);

const app = require('../lib/app');

describe('images', () => {

    const request = chai.request(app);

    let image = {
        "title": "Title",
        "description": "Image Description",
        "category": "animals",
        "url": "http://url.com" 
    }
    it('posts valid image', done => {
        request
            .post('/images')
            .send(image)
            .then( res => {
                console.log(2);
                request
                    .get(`/images/${res.body._id}`)
                    
                    .then(res => {
                        console.log(1, res.body.title);
                        assert.equal (res.body.title, image.title);
                        return done();
                    });
            })
            .catch(done);
    });
});