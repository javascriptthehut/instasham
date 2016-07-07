const fs = require('fs');
const client = require('redis.js').client;


function index(req, res){
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

function public(req, res){
  const path = req.url.split('public')[1];
  const ext = req.url.split('.')[1];
  fs.readFile(`${__dirname}/public${path}`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': `text/${ext}`});
    res.end(data);
  });
}

function get(req, res){
  client.get('id:all', (err, reply) =>{
    if (err) throw err;
    console.log(reply)
  })
}

function 

module.exports = {
  indexURL: indexURL,
};
