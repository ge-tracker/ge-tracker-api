const { createClientFromEnv } = require('./lib/client')

createClientFromEnv()
  .get('items/1050')
  .then(console.log)
  .catch(err => console.error(err.message))
