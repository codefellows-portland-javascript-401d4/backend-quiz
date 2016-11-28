const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('./lib/setup-mongoose');
const app = require('./lib/app');

describe('image request', () => {

  const request = chai.request(app);

  const image = {
	  title: "Billy",
	  description: "This is a test it is only a test",
	  category: "animals",
	  url: "http://www.facebook.com"
}
  
  it('makes requests', done => {
    request
      .post('/api/images')
      send(image)
      .then(res => {
        assert.ok(image._id);
        done();
      });
  })

});