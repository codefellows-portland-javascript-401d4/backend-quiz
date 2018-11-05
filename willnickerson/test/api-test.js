const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

require('../lib/mongoose-setup');
const app = require('../lib/app');

describe('image api', () => {
  const request = chai.request(app);
  const testImg = {
    title: 'test',
    description: 'this is a test',
    category: 'food',
    url: 'www.google.com'
  };

  it('posts an image', done => {
    request
      .post('/images')
      .send(testImg)
      .then(res => {
        assert.isOk(res.body);
        testImg._id = res.body._id;
        done();
      })
      .catch(done);
  });

  it('gets an image by id', done => {
    request
      .get(`/images/${testImg._id}`)
      .then(res => {
        assert.isOk(res.body);
        assert.deepEqual(res.body, testImg);
        done();
      })
      .catch(done);
  });

});
