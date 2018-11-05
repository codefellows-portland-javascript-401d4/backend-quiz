const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect = chai.expect;
chai.use(chaiHttp);
require('../lib/mongoose');
const app = require('../lib/app');