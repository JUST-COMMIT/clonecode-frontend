const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 1, //api 주소 입력
      changeOrigin: true,
      pathRewrite: {
        '/api': '',
      },
    })
  );
};