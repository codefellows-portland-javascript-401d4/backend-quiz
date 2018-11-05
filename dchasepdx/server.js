const app = require('./lib/app');
<<<<<<< HEAD
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
require('./lib/setup-mongoose');

const server = http.createServer(app);

server.listen(port, () => {
  console.log('server started on port', server.address().port);
});

>>>>>>> 4dada106c578a0c8e8db797125f5dda814fd400d
