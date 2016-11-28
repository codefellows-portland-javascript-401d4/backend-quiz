/*** Created by Gloria Anholt on 11/28/16. */

const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, err => {
  if(err) {
    console.error('Server error: ', err);
  } else {
    console.log('Server running on port ', port);
  }
});