<<<<<<< HEAD
const app = require('./lib/app');
const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);
require('./lib/setup-mongoose');

server.listen(port, () => {
    console.log('Now serving at port ', server.address());
});
=======
'use strict';

const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 3000;
require('./lib/setup-mongoose');

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server listening on port', server.address().port);
});

module.exports = server;
>>>>>>> 91615f0c8506f5279326a1342e18458adba07de3
