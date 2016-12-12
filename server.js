require('dotenv').load({silent: true});

const app = require('./app');
const http = require('http');
const port = process.env.PORT;

require('./mongoose-cfg');


// the server
const server = http.createServer(app);

server.listen(port, () => {
  console.log('server listening on: ', server.address());
});