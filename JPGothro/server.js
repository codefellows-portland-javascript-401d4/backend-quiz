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

const app = require ('./lib/app');
const http = require('http');
const port = process.env.PORT || 3030;
require('./lib/mongooseConfig');

const server = http.createServer(app);

server.listen(port, () => {
    console.log('server listening on: ', server.address());
});

>>>>>>> eef839e7ef70d03b76e21694f172e250725bf2e6
