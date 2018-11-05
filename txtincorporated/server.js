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

if(!process.env.TRAVIS) {
  require('dotenv').config();
}

const app = require('./lib/app');
const port = process.env.PORT;
require('./lib/setup-mongoose');

http.createServer(app).listen(port);
>>>>>>> 5cff8fdbfbfa14c72106a155fd8697d186c19be4
