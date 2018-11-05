const app = require('./lib/app');
<<<<<<< HEAD
const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);
require('./lib/setup-mongoose');

server.listen(port, () => {
    console.log('Now serving at port ', server.address());
=======
const http = require('http');
require('./lib/mongoose');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Ap running on port ${server.address().port}.`);
>>>>>>> 3298953f6afb3ff3f27fbfe14f9229985dfb86f2
});