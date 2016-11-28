const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const Image = require('./imageModel');

const assert = chai.assert;
chai.use(chaiHttp);

//load test env variables
const path = require('path');
require('dotenv').load({silent: true, path: path.join(__dirname, './.env.test')});

const connection = require('./mongoose-cfg');
const app = require('/app');

describe('Image testing', () => {
  const request = chai.request(app);

  before( done => {
    const drop = () => connection.db.dropDatabase(done);
    if(connection.readyState === 1) drop();
    else connection.once('open', drop);
  });

  it('posts image info into database', (done) => {
    request
      .post('/image')
      .send(
            { 
        "title": "Your House Stinks", 
        "category": "places",
        "description": "money pit of a house",
        "url": "http://www.dumb-house-image.png" 
      })
  })
  .catch(done);
  //not finished!!!!!
});