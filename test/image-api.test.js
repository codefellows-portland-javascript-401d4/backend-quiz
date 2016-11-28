const chaiHttp = require('chai-http');
const chai = require('chai');
const expect = chai.expect;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('Image', () => {
  before(done => {
    const drop = () => connection.db.dropDatabase(done);
    if(connection.readyState === 1) drop();
    else connection.on('open', drop);
  });

  const request = chai.request(app);
  })

let image = {
  title: "cat",
  description: "cat picture",
  category: "animals",
  url: "catpicture"
}

it('post', done => {
  request
    .post('/api/image')
    .send(image)
    .then(res => {
      const image = res.body;
      expect(image._id).to.be.ok;
    })
})