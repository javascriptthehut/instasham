const fs = require('fs');
const client = require('./redis.js').client; //this module allow javascript to interact with the redis db
const qs = require('querystring');

function index(req, res){
  fs.readFile(`${__dirname}/../public/index.html`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

function publicURL(req, res){
  const path = req.url.split('public')[1];
  const ext = req.url.split('.')[1];
  fs.readFile(`${__dirname}/../public${path}`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': `text/${ext}`});
    res.end(data);
  });
}

function get(req, res){
  client.lrange('id:all', -12, -1, (err, lastTwelve) => { //the get method will give back an array from redis.
    if (err) throw err;
    const promises = lastTwelve.map((id) => {
      return new Promise((resolve, reject) => {
        client.hgetall('id:' + id, (error, hash)=>{
          if (error) reject(error);
          resolve(hash);
        });
      });
    });
    Promise.all(promises)
    .then((hashArray)=>{
      const json = JSON.stringify(hashArray);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(json);
    }, (errors) => {
      console.log(errors);
    });
  });
}

function post(req){
  let body = '';
  req.on('data', (data) => {
    body += data; //data comes in bits, in a stream. every bit that comes id then added to the body. the empty string will stringefy the data (which may come as buffer)
    if(body.length > 1e6) { //if the amount of data is bigger then 1 million!
      req.connection.destroy(); //detroy the connection.
    }
  });
  req.on('end', () => {
    const postData = qs.parse(body);  //parsing from a query string (body) into an object
    client.lindex('id:all', -1, (err, reply) => { //getting the key(id:all), will get the value of that key. the lindex command gets the key form a list and a specific key
      if (err) throw err;
      const data = reply + 1;
      client.rpush('id:all', data);
      client.hmset('id:' + data, postData); //hmset sets the key's value as a hash table.

    });
  });
}

module.exports = {
  index: index,
  publicURL: publicURL,
  get: get,
  post: post,
};
