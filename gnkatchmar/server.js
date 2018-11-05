const app = require('./lib/app');
<<<<<<< HEAD
const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);
require('./lib/setup-mongoose');

server.listen(port, () => {
    console.log('Now serving at port ', server.address());
});
=======
const http = require('http');
const port = process.env.PORT || 3000;
const connection = require('./lib/setup-mongoose');

const server = http.createServer(app);
server.listen(port, () => {
  console.log('PORT: ', server.address());
});
>>>>>>> 8baec268884e7a8dd86daf82c6b89b3b4725dc13
