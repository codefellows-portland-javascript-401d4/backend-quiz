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

require ('./lib/mongoose');

const server = http.createServer(app);
server.listen(port, () => {
  console.log('Server is running at', server.address());
});
>>>>>>> 579556a064ee8ff39aac05d6944ec51cbb65f690
