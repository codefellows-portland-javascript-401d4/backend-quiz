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
const port = process.env.PORT || 3000 
const http = require('http');

const server = http.createServer(app);
server.listen(port, () => {
  console.log('The server is running on port', port);  
});
>>>>>>> f3ca5451b5189095b3ab1531934936464c385255
