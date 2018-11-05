const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/mongoose');
const app = require('../lib/app');

describe('image', () => {

    const request = chai.request(app);

    const cat = {
        title: 'cat',
        description: 'catPic',
        category: 'animals',
        url: 'www.cats.com'
    };

    it('Get All', done =>{
        request
            .get('/images')
            .then(res => {
                assert.deepEqual(res.body, []);
                done();
            })
            .catch(done);
    });
});