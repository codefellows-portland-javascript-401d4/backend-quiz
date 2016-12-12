
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const app = require('../lib/app');
require( '../lib/setup-mongoose' );

chai.use(chaiHttp);
const request = chai.request(app);

describe('e2e test', () => {

  const mushroomImage = {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eQMiuJ5jI7cXd_OBylCNmjlChMFk3fi2xE08F8EZ_0jN9USaqYXkcw',
    description: 'mario mushroom'
  };

  let retrievedImage = {};

  it('posts data', () => {
    request
      .post('/images')
      .send(mushroomImage)
      .end((err, res) => {
        if (err) return done(err);
        assert.equal(res.statusCode, 200);
        assert.include(res.header['content-type'], 'application/json');
        let result = JSON.parse(res.text);
        assert.equal(result.url, mushroomImage.url);
        assert.equal(result.description, mushroomImage.description); // store hashes, not plaintext passwords
        retrievedImage = result;
        done();
      });
  });

  it('use returned id to GET same image', done => {
    request
      .get(`/images/${retrievedImage._id}`)
      .end((err, res) => {
        if (err) return done(err);
        assert.equal(res.statusCode, 200);
        assert.include(res.header['content-type'], 'application/json');
        let result = JSON.parse(res.text);
        assert.equal(result.url, mushroomImage.url, res.text);
        assert.equal(result.description, mushroomImage.description, res.text);
        done();
      });
  });

// TODO: assert that title, description, category, and url are equal to orignally supplied data

});
