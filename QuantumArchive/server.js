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
const port = process.env.PORT || 9009;
const app = require('./lib/app');
require('./lib/setup-mongoose');

const server = http.createServer(app);
server.listen(port, () => {
    console.log('server currently listening on', server.address().port);
>>>>>>> 2b788263898ad56d5c57ac57071f20578e82ffdf
});