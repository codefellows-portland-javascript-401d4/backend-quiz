const app = require('./lib/app');
const http = require('http');
const port = 3000;
require('./lib/setup-mongoose');

const server = http.createServer(app);

server.listen(port, () => {
  console.log('server started on port', server.address().port);
});

