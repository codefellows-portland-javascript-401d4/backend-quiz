
const app = require ('./lib/app');
const http = require('http');
const port = process.env.PORT || 3030;
require('./lib/mongooseConfig');

const server = http.createServer(app);

server.listen(port, () => {
    console.log('server listening on: ', server.address());
});

