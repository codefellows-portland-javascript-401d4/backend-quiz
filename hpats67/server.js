<<<<<<< HEAD
const app = require('./lib/app');
const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);
require('./lib/setup-mongoose');

server.listen(port, () => {
    console.log('Now serving at port ', server.address());
=======
require('dotenv').load();
const http = require('http');
const app = require('./lib/app');
const port = process.env.PORT || 3000;
require('./lib/setup-mongoose');

const server = http.createServer(app);

server.listen(port, err => {
  if(err) {
    console.log('Error starting the server: ', err);
  } else {
    console.log('Server listening on port ', port);
  }
>>>>>>> 063165c9b04e651970de07b9d0597c5377db308f
});