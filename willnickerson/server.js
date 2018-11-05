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
const port = 3000;
const app = require('./lib/app');
require('./lib/mongoose-setup');

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server listening on port ', server.address().port);
});
>>>>>>> e3f0f3062577238796b53f09ce241ae602b88c33
