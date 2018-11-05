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

server.listen(port, () => {
  console.log('Server running at ', server.address().address, ':', server.address().port);
>>>>>>> 594e2d8516cd3ee6018e864feca43317d1380db9
});