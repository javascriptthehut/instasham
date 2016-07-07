const paths = require('url-paths.js');

function handler(req, res){

  const url = req.url;

  if(url === '/'){

  } else if (url.includes('public')){

  } else if (url.includes('get')){

  } else if (url.includes('post')){

  }
}

var server = require('server.js');

module.exports = {
  handler: handler
};
