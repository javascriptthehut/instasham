
//setting up redis db

const redis = require('redis');

const client = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true});

client.on('error', (err) => {
  console.log(`${err}`);
});

module.exports = {
  client: client
};
