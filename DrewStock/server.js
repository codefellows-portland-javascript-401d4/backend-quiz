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
const http = require('http');
const app = require('./lib/app');
const port = process.env.PORT || 5000;
require('./lib/mongoose-setup');


const server = http.createServer(app);

server.listen(port, err => {
  if(err) console.log('server error', err);
  else console.log('server running on port', server.address().port);
});
>>>>>>> 30116cae9809cbd298750306e8a6010388644124
