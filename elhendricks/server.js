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
const port = process.env.PORT || 3000;

require('./lib/setup-mongoose');

const server = http.createServer(app);

server.listen(port, err => {
    if (err) console.log(`Error ${err}`);
    console.log('Server running at', server.address());
>>>>>>> 60f848b30a79db6bfe6ef5772cacc36b3192206b
});