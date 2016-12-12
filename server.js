const http = require('http');
const app = require('./lib/app');
const port = process.env.PORT || 5000;
require('./lib/mongoose-setup');


const server = http.createServer(app);

server.listen(port, err => {
  if(err) console.log('server error', err);
  else console.log('server running on port', server.address().port);
});
