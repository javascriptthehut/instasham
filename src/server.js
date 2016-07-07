const http = require('http');
var handler = require('handler.js');

const server = http.createServer(handler);

const port = process.env.PORT || 5000;

server.listen(port);
