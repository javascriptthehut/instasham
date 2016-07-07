const fs = require('fs');

function indexURL(req, res){
  fs.readFile(`${__dirname}/index.html`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}

function publicURL(req, res){

  const ext = req.url.split('.')[1];
  fs.readFile(`${__dirname}/public`);
}

module.exports = {
  indexURL: indexURL,
};
