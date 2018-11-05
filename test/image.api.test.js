'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');
const request = chai.request(app);

describe('image end to end test', () => {

  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if(connection.readyState === 1) drop();
    else connection.on('open', drop);
  });

  const testImage = {
    title: 'Test Image',
    description: 'Test description',
    category: 'animals',
    url: 'http://image.jpg'
  };

  it('POSTs an image', done => {
    request
      .post('/images')
      .send(testImage)
      .then(res => {
        const image = res.body;
        testImage.__v = image.__v;
        testImage._id = image._id;
        done();
      })
      .catch(done);
  });

  it('GETs all images', done => {
    request.get('/images')
      .then(res => {
        assert.deepEqual(res.body, [testImage]);
        done();
      })
      .catch(done);
  });

  it('GETs image by id', done => {
    request
      .get(`/images/${testImage._id}`)
      .then(res => {
        const image = res.body;
        assert.deepEqual(image, image);
        done();
      })
      .catch(done);
  });
});