var redis = require('redis');

var client = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});

client.on('error', (err) => {
  console.log(`${err}`);
});

module.exports = {
  client: client
};
