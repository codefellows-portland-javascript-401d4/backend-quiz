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

const app = require('./lib/app');
const http = require('http');
const port = process.env.PORT || 3000;
require('./lib/setup-mongoose');

const server = http.createServer(app);
server.listen(port, () => {
  console.log('Server is running at: ', server.address());
});
>>>>>>> 099f891bb729091df50495339348b14f5f31803e
