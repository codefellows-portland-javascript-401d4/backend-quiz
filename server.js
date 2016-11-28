require('dotenv').load({silent: true});

const app = require('./app');
const http = require('http');
const port = process.env.PORT;

require('./lib/mongoose-config');


// the server
const server = http.createServer(app);

server.listen(port, () => {
  console.log('server listening on: ', server.address());
});


// the model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  drinkType: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('DrinkType', schema);