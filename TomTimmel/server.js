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
const port = process.env.PORT || 8080;
require('./lib/mongoose');

const server = http.createServer(app);

server.listen(port, ()=> {
    console.log('server listening on port', server.address().port);
});
>>>>>>> c605e3ce2b8b535998f6431894a2d0511c404893
