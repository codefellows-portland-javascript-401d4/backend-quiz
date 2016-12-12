const http = require('http');
const port = 3000;
const app = require('./lib/app');
require('./lib/mongoose-setup');

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server listening on port ', server.address().port);
});
