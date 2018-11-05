<<<<<<< HEAD
const app = require('./lib/app');
const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);
require('./lib/setup-mongoose');

server.listen(port, () => {
    console.log('Now serving at port ', server.address());
=======
/** Created by Gloria Anholt on 11/28/16. **/

const http = require('http');
const app = require('./lib/app');
const port = process.env.PORT || 3000;
require('./lib/mongoose');

const server = http.createServer(app);

server.listen(port, err => {
  if(err) {
    console.error('Server error: ', err);
  } else {
    console.log('Server running on port ', port);
  }
>>>>>>> 0cf61ef1f879d1e77a0fa83f8ae62618bdaddc29
});