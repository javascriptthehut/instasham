const paths = require('url-paths.js');

function handler(req, res){

  const url = req.url;

  if(url === '/'){
    paths.index(req, res);
  } else if (url.includes('public')){
    paths.publicURL(req, res);
  } else if (url.includes('get')){
    paths.get(req, res);
  } else if (url.includes('post')){
    paths.post(req);
  }
}

module.exports = {
  handler: handler
};
