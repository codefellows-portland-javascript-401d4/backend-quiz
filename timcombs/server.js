<<<<<<< HEAD
const app = require('./lib/app');
const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);
require('./lib/setup-mongoose');

server.listen(port, () => {
    console.log('Now serving at port ', server.address());
=======
require('dotenv').load({silent: true});

const app = require('./app');
const http = require('http');
const port = process.env.PORT;

require('./mongoose-cfg');


// the server
const server = http.createServer(app);

server.listen(port, () => {
  console.log('server listening on: ', server.address());
>>>>>>> eadaf8e5f3c8e137ae848b44b60f8149ccd8fccd
});