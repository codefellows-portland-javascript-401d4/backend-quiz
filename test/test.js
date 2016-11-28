const Img = require('../lib/models/images');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const expect = require('chai').expect;

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');
const request = chai.request(app);

describe('POST test', () => {
  it('can post img', done => {
    const img = new Img({
      title: 'Test',
      category: 'food',
      url: 'url.com'
    });

    request
      .post('/images')
      .send(img)
      .then(res => {
        const image = res.body;
        console.log(res.body);
        console.log('img', img);
        assert.equal(res.body, img);
      })
      .catch(done);
  })
})