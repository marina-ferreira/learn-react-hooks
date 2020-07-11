const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://localhost:4000',
    pathRewrite: { '^/api' : '' }
    // removes the /api prefix before forwarding the request to the server
  }))
}
