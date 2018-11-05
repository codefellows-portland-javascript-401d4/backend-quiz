<<<<<<< HEAD
const app = require('./lib/app');
const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);
require('./lib/setup-mongoose');

server.listen(port, () => {
    console.log('Now serving at port ', server.address());
=======
const http = require('http');
const app = require('./lib/app');
const port = process.env.PORT || 3000;
require('./lib/setup-mongoose');

const server = http.createServer(app);

server.listen(port, err => {
  if (err) {
    console.error('Error starting the server: ', err);
  } else {
    console.log('Server listening on port ', port);
  }
>>>>>>> 75ea9a132a495596cdc2068fe63e5f6b78e7c70f
});