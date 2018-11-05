const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('img api', () => {
  before(done => {
    const CONNECTED = 1;
    if(connection.readyState === CONNECTED) dropCollection();
    else connection.on('open', dropCollection);

    function dropCollection() {
      const name = 'images';
      connection.db
        .listCollections({name})
        .next((err, collinfo) => {
          if(!collinfo) return done();
          connection.db.dropCollection(name, done);
        });
    }
  });

  const request = chai.request(app);
  const dummyImg = {
    "title": "title",
    "description": "description",
    "category": "food",
    "url": "http://url.com" 
  };

  it('should save a  file from a POST request', done => {
    request
      .post('/images')
      .send(dummyImg)
      .then(res => {
        assert.ok(res.body._id);
        dummyImg._id = res.body._id;
        dummyImg.__v = res.body.__v;
        done();
      })
      .catch(done);
  });

  it('should get an img by id', done => {
    request
      .get(`/images/${dummyImg._id}`)
      .then(res => {
        assert.deepEqual(res.body, dummyImg);
        done();
      })
      .catch(done);
  });


});