const app = require('./lib/app');
const http = require('http');
const port = 3600;
/*const connection = */ require('./lib/setupMongoose');

const server = http.createServer(app);
server.listen(port, ()=>{
	console.log('Server is up and running');
});
module.exports = server;