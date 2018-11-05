const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);
const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');
const request = chai.request(app);

describe('Images API', () => {

  before(done => {
    const CONNECTED = 1;
    if (connection.readyState === CONNECTED) dropCollection();
    else connection.on('open', dropCollection);

    function dropCollection() {
      const name = 'images';
      connection.db
        .listCollections({ name })
        .next((err, info) => {
          if (!info) return done();
          connection.db.dropCollection(name, done);
        });
    }
  });

  it('Starts with empty collection', done => {
    request
      .get('/api/images')
      .then(res => {
        console.log(res.body);
        assert.isArray(res.body);
        assert.equal(res.body.length, 0);
        done();
      })
      .catch(done);
  });

  let testImg = {
    'title' : 'Mountains',
    'category' : 'places',
    'description' : 'Spiky. Big.',
    'url' : 'http://i.imgur.com/alskdflkajsdf.jpg'
  };

  it('Posts an image', done => {
    request
      .post('/api/images')
      .send(testImg)
      .then(res => {
        console.log(res.body);
        testImg._id = res.body._id;
        assert.equal(res.body.title, testImg.title);
        done();
      })
      .catch(done);
  });

  it('Retrieves an image by id', done => {
    request
      .get('/api/images/' + testImg._id)
      .then(res => {
        assert.equal(res.body.title, testImg.title);
        assert.equal(res.body.category, testImg.category);
        assert.equal(res.body.description, testImg.description);
        assert.equal(res.body.url, testImg.url);
        done();
      })
      .catch(done);
  });

});