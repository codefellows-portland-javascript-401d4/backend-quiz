const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/mongoose-setup');

const app = require('../lib/app');

describe ('image'. () => {

  const request = chai.request(app);

})
