const corsProxy = require('cors-anywhere')
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 7000
corsProxy
  .createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
  })
  .listen(port, host, () => {
    console.log(`Proxy CORS Anywhere on ${host}:${port}`)
  })
