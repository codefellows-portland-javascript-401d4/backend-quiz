/** Created by Gloria Anholt on 11/28/16. **/

const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/mongoose');
const app = require('../lib/app');


describe('Image router', () => {

  const request = chai.request(app);
  const newImage = {
    title: 'Test Image',
    description: 'not real',
    category: 'places',
    url: 'www.testing.com'
  };

  it.only('Posts a new image to the db', done => {
    request.post('/image/post')
      .send(newImage)
      .then(res => {
        assert.equal(res.body, newImage);
      })
      .catch(done);
  });

  it('Gets an image by the id', done => {
    request.get('/image/' + id)
      .then(res => {
        assert.equal(res.body, newImage);
      })
      .catch(done);
  });

  it('Gets an image by category query string', done => {

  });

  it('Gets all images', done => {

  });

});
